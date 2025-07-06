import os
from netCDF4 import Dataset
import numpy as np
import pandas as pd

# Folder path (deployment ready)
folder_path = os.path.join(os.getcwd(), 'dataset', 'Order', 'Jul25_134981')
folder_path = os.path.abspath(folder_path)
print(f'Looking in: {folder_path}')


output_csv = 'Combined_AOD_Dataset_Sampled.csv'
header_written = False

# Sampling step: every 10th pixel to reduce file size
sampling_step = 10

for filename in os.listdir(folder_path):
    if filename.endswith('.nc'):
        file_path = os.path.join(folder_path, filename)
        print(f'Processing {filename}...')

        try:
            data = Dataset(file_path, mode='r')
            variables = data.variables.keys()
            print(f'Available variables in {filename}: {variables}')

            if not {'AOD', 'latitude', 'longitude'}.issubset(variables):
                print(f'Skipping {filename} as required variables are missing.')
                continue

            aod = data.variables['AOD'][:]
            lat = data.variables['latitude'][:]
            lon = data.variables['longitude'][:]

            print(f'AOD shape: {aod.shape}, Latitude shape: {lat.shape}, Longitude shape: {lon.shape}')

            if lat.ndim == 1 and lon.ndim == 1:
                lon_grid, lat_grid = np.meshgrid(lon, lat)
            else:
                lat_grid = lat
                lon_grid = lon

            # Downsampling: select every 10th pixel
            aod_sampled = aod[::sampling_step, ::sampling_step]
            lat_sampled = lat_grid[::sampling_step, ::sampling_step]
            lon_sampled = lon_grid[::sampling_step, ::sampling_step]

            # Flatten arrays
            aod_flat = aod_sampled.flatten()
            lat_flat = lat_sampled.flatten()
            lon_flat = lon_sampled.flatten()

            valid_indices = np.where((aod_flat > 0) & (aod_flat < 5))
            if len(valid_indices[0]) == 0:
                print(f'No valid AOD data in {filename}, skipping...')
                continue

            aod_clean = aod_flat[valid_indices]
            lat_clean = lat_flat[valid_indices]
            lon_clean = lon_flat[valid_indices]

            file_df = pd.DataFrame({
                'Latitude': lat_clean,
                'Longitude': lon_clean,
                'AOD': aod_clean,
                'SourceFile': filename
            })

            if not header_written:
                file_df.to_csv(output_csv, index=False, mode='w', header=True)
                header_written = True
            else:
                file_df.to_csv(output_csv, index=False, mode='a', header=False)

            print(f'Data from {filename} written successfully.')

        except Exception as e:
            print(f'Error processing {filename}: {e}')
            continue

print(f'✅ All files processed. Combined dataset saved to {output_csv}')
