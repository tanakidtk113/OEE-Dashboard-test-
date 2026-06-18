# โปรเจ็คทำเล่นๆเอาไว้ขิงคนอื่น5555 ทำกะ AI Copilot 

**เกี่ยวกับโปรเจค**
ชื่อ : FactoryPulse – Smart Factory OEE Dashboard
    แนวคิดของโปรเจค
        เป็นเว็บแอปต้นแบบสำหรับติดตามข้อมูลการผลิตในโรงงานโดยเน้นการแสดง KPI สำคัญของสายการผลิต เช่น
        - จำนวนการผลิต (Output)
        - อัตราของเสีย (Defect Rate)
        - เวลาหยุดเครื่อง (Downtime)
        - ประสิทธิภาพโดยรวมของเครื่องจักร (OEE)

จุดประสงค์ของโปรเจค
        - แสดงแนวคิดระบบติดตามการผลิตในโรงงานแทนที่จะดูข้อมูลจากหลายไฟล์หรือหลายที่ระบบนี้จะรวมข้อมูลสำคัญมาไว้ในหน้า Dashboard เดียว
        - ใช้เป็นต้นแบบ (Prototype) ยังไม่ใช่ระบบเต็ม แต่พร้อมต่อยอดได้
        - ใช้เป็น Portfolio / โปรเจคลง GitHub
        - ที่สำคัญเอาไว้อวดๆๆๆๆ

โปรเจคนี้ “มีรูปร่าง” แบบไหน?
                                                            ผู้ใช้
                                                             ↓
                                                 Frontend (React Dashboard)
                                                             ↓
                                                     Backend (FastAPI API)
                                                             ↓
                                ข้อมูล (ตอนนี้เป็น mock data / สามารถต่อยอดไปเป็น CSV, DB, ESP32 ได้)

**อธิบายทีละส่วน**
1) Frontend
   คือหน้าตาเว็บที่ผู้ใช้เห็น
    - ทำงานโดยแสดงหน้า Dashboard และดึงข้อมูลจาก backend แสดงค่า KPI เช่น Output / Defect / Downtime / OEE 
    - ตอนนี้ใช้ React / Vite

2) Backend
   คือส่วนที่ทำหน้าที่เป็น API หน้าที่ของ Backend
    - รับคำขอจาก frontend
    - ส่งข้อมูล KPI กลับไป
    - เป็นจุดเชื่อมต่อกับข้อมูลในอนาคต
    - ตอนนี้ใช้ FastAPI , Uvicorn

3) Data Source
   ตอนนี้ข้อมูลยังเป็น ค่าจำลอง (mock data) และในอนาคตยังสามารถเปลี่ยนเป็น : CSV / Excel

   Database
    - ESP32 / Sensor ข้อมูลจริงของโรงงาน

**ตอนนี้ระบบทำอะไรได้แล้ว**
    เวอร์ชันปัจจุบันตอนนี้โปรเจคนี้สามารถ
     - เปิดเว็บ Dashboard ได้
     - เปิด backend API ได้
     - ให้ frontend ดึงข้อมูลจาก backend ได้
     - แสดงค่า KPI เบื้องต้นได้
     - แสดงกราฟ เทียบจำนวนต่อเดือน

**ตัวอย่างค่าที่แสดง**
- Total Output
- Defect Rate
- Downtime
- OEE


    ถ้าอธิบายแบบง่ายๆ "โปรเจคนี้" คืออะไร?

    เป็นเว็บแอปต้นแบบสำหรับติดตาม KPI การผลิตในโรงงาน โดยใช้ React สำหรับแสดงผล Dashboard และ FastAPI สำหรับจัดการ API ฝั่ง backend

--------------------------------------------------------------------------------------------------------------------------------

FactoryPulse – Smart Factory OEE Dashboard (ต้นแบบ) ใช้โปรแกรมอะไรบ้าง ใช้ส่วนเสริม VS Code ตัวไหนบ้างโปรเจค

1) **โปรแกรมหลักที่ลง**
 vs code
- ใช้เขียนโค้ด แก้ไฟล์ เปิด terminal + รัน
- เป็นโปรแกรมหลักที่ใช้พัฒนา frontend , backend

 Git
- ใช้จัดการเวอร์ชัน
- ใช้เชื่อมกับ GitHub

 Node.js
- ใช้รันฝั่ง frontend 
- สำหรับคำสั่ง npm install , npm run dev
- เมื่อติดตั้งแล้วจะได้ npm มาด้วย

 Python
- ใช้รันฝั่ง backend ของโปรเจค

2) **แพคเกจ,เครื่องมือที่ใช้ใน vs code**
ฝั่ง Frontend
 React
- ใช้สร้างหน้าเว็บ , ส่วนแสดงผล dashboard
- เป็นตัวหลักของ ui ฝั่ง frontend

 Vite
- ใช้สร้างโปรเจค react และรันเว็บในโหมดพัฒนา

 Axios
- ใช้เรียกข้อมูลจาก backend api
- ดึงข้อมูลจาก /summary มาแสดงบนหน้า dashboard

 React Router DOM
- เผื่อขยาย dashboard / upload / logs / report

 Recharts
- ใช้สร้างกราฟใน dashboard 

ฝั่ง Backend
 FastAPI
- ใช้สร้าง API ของระบบ
- เหมาะกับ backend ที่ต้องส่งข้อมูลให้ frontend

 Uvicorn
- ใช้รันเซิร์ฟเวอร์ FastAPI

 Pandas
- ใช้อ่านและจัดการข้อมูลตาราง พวก CSV , Excel

 python-multipart
- ใช้รองรับการอัปโหลดไฟล์ผ่าน API
- ต้องใช้ถ้าจะทำฟีเจอร์ Upload CSV , Excel

3) **VS Code Extensions ที่ใช้**
 Python
- ช่วยให้ vs code ทำงานกับไฟล์ Python ดีขึ้น (มั้ง)
- เหมาะกับฝั่ง backend ของโปรเจค

 Pylance
- ช่วยใส่โค้ด , ช่วยดู syntax ของ Python

 ESLint
- ช่วยตรวจโค้ด JavaScript / React

 Prettier
- ช่วยจัด format ให้อ่านง่าย

 Tailwind CSS IntelliSense
- ไว้ใข้ตกแต่ง

 GitLens
- ช่วยดูประวัติ Git ใน vs code

 Thunder Client
- ไว้ทดสอบ API 
- ไว้ส่ง request ไป backend เข่น GET /summary

# โค้ดรัน backend
1) สร้าง terminal ก่อน
2) ใส่คำสั่งต่อไปนี้ ทีละคำสั่ง
    2.1) cd "..........\FactoryPulse – Smart Factory OEE Dashboard\factorypulse-dashboard\backend" **ที่ตัวเองเก็บไฟล์ไว้**
    2.2) .\venv\Scripts\activate
    2.3) uvicorn app.main:app --reload

# โค้ดรัน frontend
1) สร้าง terminal ก่อน
2) ใส่คำสั่งต่อไปนี้ ทีละคำสั่ง
    2.1) cd "..........\FactoryPulse – Smart Factory OEE Dashboard\factorypulse-dashboard\frontend" **ที่ตัวเองเก็บไฟล์ไว้**
    2.2) npm run dev



--------------------------------------------------------------------------------------------------------------------------------



# Thai -> ENG (Google translate + Grammar rewrite)
# A project I did just for fun, to brag about to others.
**About the Project**
Name : FactoryPulse – Smart Factory OEE Dashboard
    Project Concept:
        This is a prototype web application for tracking factory production data, focusing on displaying key KPIs for the production line, such as :
        - Production Quantity (Output)
        - Defect Rate
        - Downtime
        - Overall Equipment Efficiency (OEE)

Project Objectives:
        - To demonstrate a production tracking system for factories, consolidating key data into a single dashboard instead of relying on multiple files or locations.
        - To serve as a prototype; it's not a full-fledged system but a starting structure ready for further development.
        - To serve as a portfolio/project on GitHub.
        - And most importantly, to showcase it!

What does this project "look like"?
                                                              User
                                                               ↓
                                                   Frontend (React Dashboard)
                                                               ↓
                                                     Backend (FastAPI API)
                                                               ↓
                                    Data (Currently mock data / can be extended to CSV, DB, ESP32)

**Explanation of each part**
1) Frontend
This is the web interface that users see.
- It displays the Dashboard and retrieves data from the backend, showing KPI values ​​such as Output / Defect / Downtime / OEE.
- Currently uses React / Vite.

2) Backend
This part acts as the API. Backend functions:
- Receive requests from the frontend.
- Send KPI data back.
- Serve as a connection point for future data.
- Currently uses FastAPI, Uvicorn.

3) Data Source
Currently, the data is mock data, but can be converted to: CSV / Excel in the future.

Database
- ESP32 / Sensor (real factory data)

**What the system can do now:**
The current version of this project can:
- Open a web dashboard
- Open a backend API
- Allow the frontend to retrieve data from the backend
- Display basic KPI values

**Examples of values ​​displayed:**
- Total Output
- Defect Rate
- Downtime
- OEE

 what is this project?

    is a prototype web application for tracking production KPIs in a factory. It uses React for displaying the dashboard and FastAPI for managing the backend API.

-------------------------------------------------------------------------------------------------------------------------------------

FactoryPulse – Smart Factory OEE Dashboard (Prototype) programs and VS Code extensions are used in this project?

1) **Main programs**
 VS Code
- Used for writing code, editing files, opening the terminal, and running commands.
- The main program used for frontend and backend development.

 Git
- Used for version management.
- Used for connecting to GitHub.

 Node.js
- Used to run the frontend.
- For the commands `npm install`, `npm run dev`.
- npm is also installed after installation.

 Python
- Used to run the backend of the project.

2) **Packages and tools used in VS Code**
Frontend
 React
- Used to build web pages and dashboards.
- The core of the frontend UI.

 Vite
- Used to create React projects and run websites in development mode.

 Axios
- Used to retrieve data from the backend API.
- Retrieves data from /summary and displays it on the dashboard.

 React Router DOM
- For extending the dashboard / upload / logs / reports.

 Recharts
- Used to create graphs in the dashboard.

Backend
 FastAPI
- Used to create system APIs.
- Suitable for backends that need to send data to the frontend.

 Uvicorn
- Used to run the FastAPI server.

 Pandas
- Used to read and manipulate tabular data such as CSV and Excel.

 python-multipart
- Used to support file uploads via API.
- Required if you want to implement CSV and Excel upload features.

3) **VS Code Extensions Used**
 Python
- Improves VS Code's interaction with Python files (I think)
- Suitable for the backend of projects

 Pylance
- Helps with code insertion and Python syntax checking

 ESLint
- Helps check JavaScript/React code

 Prettier
- Helps format code for easier reading

 Tailwind CSS IntelliSense
- For styling

 GitLens
- Helps view Git history in VS Code

 Thunder Client
- For testing APIs
- For sending requests to the backend, such as GET/summary

# Backend Code
1) Open a terminal
2) Type the following commands in sequence:
2.1) cd "..........\FactoryPulse – Smart Factory OEE Dashboard\factorypulse-dashboard\backend" **(location where the files are saved)**
2.2) .\venv\Scripts\activate
2.3) uvicorn app.main:app --reload

# Frontend Code
1) Open a terminal
2) Type the following commands in sequence:
2.1) cd "..........\FactoryPulse – Smart Factory OEE Dashboard\factorypulse-dashboard\frontend" **(location where the files are saved)**
2.2) npm run dev