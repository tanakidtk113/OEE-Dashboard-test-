from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "FactoryPulse API is running"}

@app.get("/kpi")
def get_kpi():
    return [
        {"month": "Jan", "Output": 1000, "Defect Rate(%)": 5.1, "Downtime(Min)": 200, "OEE(%)": 80},
        {"month": "Feb", "Output": 1200, "Defect Rate(%)": 6.2, "Downtime(Min)": 170, "OEE(%)": 82},
        {"month": "Mar", "Output": 1500, "Defect Rate(%)": 4.8, "Downtime(Min)": 150, "OEE(%)": 85},
        {"month": "Apr", "Output": 1300, "Defect Rate(%)": 7.0, "Downtime(Min)": 220, "OEE(%)": 78},
        {"month": "May", "Output": 1700, "Defect Rate(%)": 3.5, "Downtime(Min)": 180, "OEE(%)": 88},
        {"month": "Jun", "Output": 1400, "Defect Rate(%)": 2.8, "Downtime(Min)": 160, "OEE(%)": 90},
        {"month": "Jul", "Output": 1000, "Defect Rate(%)": 6.6, "Downtime(Min)": 200, "OEE(%)": 87},
        {"month": "Aug", "Output": 1200, "Defect Rate(%)": 61.2, "Downtime(Min)": 170, "OEE(%)": 39},
        {"month": "Sep", "Output": 1500, "Defect Rate(%)": 30.5, "Downtime(Min)": 150, "OEE(%)": 63},
        {"month": "Oct", "Output": 1300, "Defect Rate(%)": 6.3, "Downtime(Min)": 220, "OEE(%)": 76},
        {"month": "Nov", "Output": 1700, "Defect Rate(%)": 3.3, "Downtime(Min)": 180, "OEE(%)": 85},
        {"month": "Dec", "Output": 2000, "Defect Rate(%)": 2.2, "Downtime(Min)": 120, "OEE(%)": 93}
    ]

@app.get("/efficiency")
def get_efficiency():
    return [
        {"name": "Jan", "OEE(%)": 80, "Defect Rate(%)": 5.1},
        {"name": "Feb", "OEE(%)": 82, "Defect Rate(%)": 6.2},
        {"name": "Mar", "OEE(%)": 85, "Defect Rate(%)": 4.8},
        {"name": "Apr", "OEE(%)": 78, "Defect Rate(%)": 7.0},
        {"name": "May", "OEE(%)": 88, "Defect Rate(%)": 3.5},
        {"name": "Jun", "OEE(%)": 90, "Defect Rate(%)": 2.8},
        {"name": "Jul", "OEE(%)": 87, "Defect Rate(%)": 6.6},
        {"name": "Aug", "OEE(%)": 39, "Defect Rate(%)": 61.2},
        {"name": "Sep", "OEE(%)": 63, "Defect Rate(%)": 30.5},
        {"name": "Oct", "OEE(%)": 76, "Defect Rate(%)": 6.3},
        {"name": "Nov", "OEE(%)": 85, "Defect Rate(%)": 3.3},
        {"name": "Dec", "OEE(%)": 93, "Defect Rate(%)": 2.2}
    ]

@app.get("/output")
def get_output():
    return [
        {"name": "Jan", "output": 1000},
        {"name": "Feb", "output": 1200},
        {"name": "Mar", "output": 1500},
        {"name": "Apr", "output": 1300},
        {"name": "May", "output": 1700},
        {"name": "Jul", "output": 1000},
        {"name": "Aug", "output": 1200},
        {"name": "Sep", "output": 1500},
        {"name": "Oct", "output": 1300},
        {"name": "Nov", "output": 1700},
        {"name": "Dec", "output": 2000}
    ]

@app.get("/downtime")
def get_downtime():
    return [
        {"name": "Jan", "downtime": 200},
        {"name": "Feb", "downtime": 170},
        {"name": "Mar", "downtime": 150},
        {"name": "Apr", "downtime": 220},
        {"name": "May", "downtime": 180},
        {"name": "Jun", "downtime": 160},
        {"name": "Jul", "downtime": 200},
        {"name": "Aug", "downtime": 170},
        {"name": "Sep", "downtime": 150},
        {"name": "Oct", "downtime": 220},
        {"name": "Nov", "downtime": 180},
        {"name": "Dec", "downtime": 120}
    ]