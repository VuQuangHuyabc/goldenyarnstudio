# Yarn Studio LLC E-commerce Website

Một website thương mại điện tử hoàn chỉnh cho cửa hàng bán áo len nữ, được xây dựng với HTML, CSS, JavaScript và Bootstrap 5.

## 🚀 Deploy lên Cloudflare Pages

### Cách 1: Upload trực tiếp (Đơn giản nhất)

1. **Nén toàn bộ thư mục**
   - Zip toàn bộ nội dung thư mục `goldenyarnstudio`
   - Đảm bảo tất cả file và thư mục con đều được zip

2. **Đăng nhập Cloudflare Dashboard**
   - Truy cập: https://dash.cloudflare.com/
   - Chọn "Pages" từ menu bên trái

3. **Tạo trang mới**
   - Click "Create a project"
   - Chọn "Upload assets"
   - Kéo thả file zip đã tạo
   - Đặt tên project: `goldenyarnstudio`

4. **Cấu hình**
   - Framework preset: None
   - Root directory: (để trống)
   - Build command: (để trống)
   - Build output directory: (để trống)

5. **Deploy**
   - Click "Save and Deploy"
   - Chờ vài phút để deploy hoàn tất

### Cách 2: Kết nối GitHub (Nâng cao)

1. **Push code lên GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/goldenyarnstudio.git
   git push -u origin main
   ```

2. **Kết nối với Cloudflare Pages**
   - Trong Cloudflare Dashboard, chọn "Create a project"
   - Chọn "Connect to Git"
   - Kết nối repository GitHub
   - Cấu hình như trên

## ✅ Kiểm tra sau khi deploy

### Các tính năng cần kiểm tra:

1. **Navigation Menu**
   - Home → Về trang chủ
   - Products → Về trang sản phẩm
   - About Us → Về trang giới thiệu
   - Contact Us → Về trang liên hệ
   - Cart icon → Về trang giỏ hàng

2. **Tìm kiếm**
   - Gõ tên sản phẩm vào ô tìm kiếm
   - Kết quả hiển thị dropdown
   - Click vào kết quả → Về trang chi tiết sản phẩm

3. **Sản phẩm**
   - Click "View Details" → Về trang chi tiết
   - Click "Add to Cart" → Thêm vào giỏ hàng
   - Chọn size và color → Thay đổi hình ảnh

4. **Giỏ hàng**
   - Thay đổi số lượng
   - Xóa sản phẩm
   - Áp dụng promo code (SAVE10, FREESHIP)
   - Proceed to Checkout

5. **Footer Links**
   - About Us → Về trang giới thiệu
   - Contact Us → Về trang liên hệ
   - Privacy Policy → Về trang chính sách
   - Shipping Policy → Về trang vận chuyển
   - Terms & Conditions → Về trang điều khoản
   - Returns & Refunds → Về trang trả hàng

6. **Form liên hệ**
   - Điền thông tin
   - Click "Send Message" → Hiển thị thông báo

## 🔧 Khắc phục lỗi thường gặp

### 1. Ảnh không hiển thị
- Kiểm tra đường dẫn ảnh trong folder SP1-SP6
- Đảm bảo file ảnh có đúng tên trong code

### 2. JavaScript không hoạt động
- Kiểm tra browser console (F12)
- Xóa cache browser (Ctrl+F5)

### 3. Links không hoạt động
- Kiểm tra file `_redirects` đã tồn tại
- Kiểm tra URL có đúng tên file không

### 4. Cart không lưu dữ liệu
- Kiểm tra browser có cho phép localStorage
- Thử lại ở chế độ ẩn danh

## 📁 Cấu trúc file

```
goldenyarnstudio/
├── index.html              # Trang chủ
├── products.html           # Trang sản phẩm
├── product-detail.html     # Chi tiết sản phẩm
├── cart.html              # Giỏ hàng
├── about.html             # Giới thiệu
├── contact.html           # Liên hệ
├── privacy.html           # Chính sách bảo mật
├── shipping.html          # Chính sách vận chuyển
├── terms.html             # Điều khoản sử dụng
├── returns.html           # Chính sách trả hàng
├── 404.html               # Trang lỗi 404
├── script.js              # JavaScript chính
├── _redirects             # File redirect Cloudflare
├── README.md              # File hướng dẫn
├── SP1/                   # Folder ảnh sản phẩm 1
├── SP2/                   # Folder ảnh sản phẩm 2
├── SP3/                   # Folder ảnh sản phẩm 3
├── SP4/                   # Folder ảnh sản phẩm 4
├── SP5/                   # Folder ảnh sản phẩm 5
└── SP6/                   # Folder ảnh sản phẩm 6
```

## 🎨 Thông tin website

- **Tên**: Yarn Studio LLC
- **Website**: goldenyarnstudio.com
- **Email**: contact@goldenyarnstudio.com
- **Địa chỉ**: 1012 Marquez Place Ste. 106-B Santa Fe, NM 87505
- **Giờ làm việc**: 9 AM - 5 PM

## 📱 Responsive Design

Website được thiết kế responsive và hoạt động tốt trên:
- Desktop (1920x1080+)
- Tablet (768x1024)
- Mobile (375x667+)

## 🔐 Bảo mật

- Không có backend server
- Dữ liệu lưu trong localStorage
- Không xử lý thanh toán thực tế
- Form liên hệ chỉ hiển thị thông báo

## 🚀 Tối ưu cho SEO

- Meta tags đầy đủ
- Semantic HTML5
- Alt text cho ảnh
- Friendly URLs
- Fast loading

---

**Lưu ý**: Website này đã được kiểm tra kỹ lưỡng và đảm bảo hoạt động đúng trên Cloudflare Pages. Tất cả các nút và liên kết đều có điểm đến hợp lệ.
