# 🎨 AuraCV - Professional CV Maker

AuraCV là một nền tảng tạo CV hiện đại, chuyên nghiệp và dễ sử dụng, giúp bạn chinh phục nhà tuyển dụng chỉ trong vài phút.

![AuraCV Preview](https://auracv.vercel.app/og-image.png)

## ✨ Tính năng nổi bật

- **6 Mẫu thiết kế cao cấp**: Từ phong cách tiêu chuẩn đến tối giản sang trọng.
- **Đa ngôn ngữ**: Hỗ trợ Tiếng Việt, Tiếng Anh, Nhật Bản, Trung Quốc và Khmer.
- **Đồng bộ Cloud**: Lưu trữ dữ liệu an toàn với Firebase.
- **Xuất PDF**: Chất lượng cao, giữ nguyên định dạng thiết kế.
- **Responsive**: Trải nghiệm mượt mà trên cả máy tính và điện thoại.

## 🚀 Công nghệ sử dụng

- **Frontend**: React 19 + Vite
- **Styling**: Vanilla CSS (Modern design tokens)
- **Backend/Auth**: Firebase (Firestore & Auth)
- **Export**: html2canvas & jspdf
- **Icons**: Lucide React

## 🛠️ Hướng dẫn cài đặt

1. **Clone project**:
   ```bash
   git clone <your-repo-url>
   cd cv-app
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Cấu hình Environment Variables**:
   Tạo file `.env.local` từ mẫu `.env.example` và điền thông tin Firebase của bạn:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   ...
   ```

4. **Chạy ở chế độ phát triển**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment (Vercel)

Dự án đã được cấu hình sẵn cho Vercel qua file `vercel.json`.

1. Đẩy code lên GitHub.
2. Import project vào Vercel.
3. Thêm các Environment Variables (từ file `.env`) vào phần **Project Settings > Environment Variables** trên Vercel dashboard.

---
© 2026 AuraCV. Chắp cánh cho sự nghiệp của bạn.
