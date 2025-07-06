🚀 Project Overview
This project estimates surface-level air pollution (PM concentrations) using INSAT satellite-derived Aerosol Optical Depth (AOD). The solution addresses the lack of air quality data in rural and remote areas by processing large satellite datasets efficiently with Python.

🎯 Key Features
✅ Satellite AOD data extraction from NetCDF files

✅ Memory-efficient sampling (step size 10)

✅ Deployment-ready CSV generator

✅ Scalable, real-time data processing pipeline

✅ Foundation for machine learning-based PM prediction

🛠️ Tools & Technologies
Python, NetCDF4, Pandas, NumPy, Matplotlib

Dataset: INSAT NetCDF files (MOSDAC portal)

📂 Project Structure

/ data       → Raw satellite files  
/ output     → Processed CSV files  
/ scripts    → Python extraction scripts  
README.md    → Project guide  
⚙️ Quick Start

# Install dependencies
pip install -r requirements.txt

# Run the extraction script
python scripts/access.py
✅ Output: Combined_AOD_Dataset_Sampled.csv (ready for ML)

📊 Next Steps
Integrate CPCB ground PM data

Train Random Forest regression model

Visualize nationwide PM maps

