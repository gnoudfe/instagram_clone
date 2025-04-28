# Tài liệu dự án Instagram Clone

## Giới thiệu

Đây là dự án mạng xã hội dựa trên Next.js, được khởi tạo bằng `create-next-app`. Dự án sử dụng các công nghệ hiện đại như React 19, TypeScript, Tailwind CSS và React Query để xây dựng một ứng dụng mạng xã hội với các tính năng tương tự Instagram.

## Cấu trúc dự án

### Cấu trúc thư mục

```
├── public/                 # Tài nguyên tĩnh (hình ảnh, icons)
├── src/                    # Mã nguồn chính
│   ├── _mocks/             # Dữ liệu giả lập
│   ├── app/                # Cấu trúc ứng dụng Next.js App Router
│   │   ├── (auth)/         # Nhóm route xác thực
│   │   ├── (main)/         # Nhóm route chính
│   │   ├── layout.tsx      # Layout chính của ứng dụng
│   │   └── styles/         # Styles toàn cục
│   ├── assets/             # Tài nguyên (fonts, icons)
│   ├── components/         # Components UI
│   │   ├── common/         # Components dùng chung
│   │   ├── icons/          # Components icon
│   │   └── ui/             # Components UI phức tạp
│   ├── configs/            # Cấu hình
│   ├── constant/           # Hằng số và endpoints
│   ├── context/            # React Context
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Các trang chức năng
│   ├── providers/          # Providers (React Query, etc.)
│   ├── services/           # Dịch vụ API
│   ├── stores/             # State management (Zustand)
│   ├── styles/             # Styles
│   ├── types/              # TypeScript types
│   └── utils/              # Tiện ích
├── .gitignore              # Cấu hình Git ignore
├── next.config.ts          # Cấu hình Next.js
├── package.json            # Quản lý dependencies
├── postcss.config.mjs      # Cấu hình PostCSS
├── tailwind.config.ts      # Cấu hình Tailwind CSS
└── tsconfig.json           # Cấu hình TypeScript
```

### Công nghệ sử dụng

- **Next.js 15**: Framework React với App Router
- **React 19**: Thư viện UI
- **TypeScript**: Ngôn ngữ lập trình
- **Tailwind CSS**: Framework CSS
- **React Query (TanStack Query)**: Quản lý trạng thái server
- **Zustand**: Quản lý trạng thái client
- **Framer Motion**: Animation
- **React Easy Crop**: Công cụ cắt ảnh

## Hướng dẫn phát triển

### Cài đặt và chạy dự án

1. Clone dự án và cài đặt dependencies:

```bash
git clone <repository-url>
cd fe_socials
npm install
```

2. Chạy môi trường phát triển:

```bash
npm run dev
```

3. Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Thêm tính năng mới

#### 1. Thêm trang mới

Để thêm một trang mới, bạn cần tạo một thư mục mới trong `src/pages/` hoặc `src/app/` tùy thuộc vào cấu trúc routing:

**Ví dụ tạo trang mới trong App Router:**

1. Tạo thư mục mới trong `src/app/(main)/ten-trang/`
2. Tạo file `page.tsx` trong thư mục đó:

```tsx
export default function TenTrangPage() {
  return (
    <div>
      <h1>Trang mới</h1>
      {/* Nội dung trang */}
    </div>
  );
}
```

#### 2. Thêm component mới

Để thêm một component mới:

1. Tạo thư mục mới trong `src/components/common/` hoặc `src/components/ui/`
2. Tạo file component:

```tsx
// src/components/common/TenComponent/index.tsx

interface TenComponentProps {
  // Định nghĩa props
}

export default function TenComponent({ ...props }: TenComponentProps) {
  return <div>{/* Nội dung component */}</div>;
}
```

#### 3. Tích hợp API mới

Để tích hợp một API mới:

1. Thêm endpoint trong `src/constant/endpoints.ts`:

```tsx
export const ENDPOINTS = {
  // Các endpoints hiện có
  TEN_API: '/api/ten-api',
};
```

2. Tạo service trong `src/services/api/`:

```tsx
// src/services/api/tenApiService.ts
import { apiRequest } from '@/services/apiRequest';
import { ENDPOINTS } from '@/constant/endpoints';

export const tenApiService = {
  getData: async (params) => {
    return await apiRequest.get(ENDPOINTS.TEN_API, { params });
  },
  // Các phương thức khác
};
```

3. Tạo React Query hook trong `src/services/queries/`:

```tsx
// src/services/queries/useTenApiQuery.ts
import { useQuery } from '@tanstack/react-query';
import { tenApiService } from '@/services/api/tenApiService';

export const useTenApiQuery = (params) => {
  return useQuery({
    queryKey: ['ten-api', params],
    queryFn: () => tenApiService.getData(params),
  });
};
```

#### 4. Thêm state management

Để thêm một store mới với Zustand:

```tsx
// src/stores/tenStore.ts
import { create } from 'zustand';

interface TenState {
  // Định nghĩa state
  data: any;
  setData: (data: any) => void;
}

export const useTenStore = create<TenState>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
```

## Hướng dẫn triển khai (Deployment)

### Triển khai trên Vercel

1. **Chuẩn bị dự án**

   Đảm bảo dự án đã được push lên GitHub, GitLab hoặc Bitbucket.

2. **Tạo tài khoản Vercel**

   Đăng ký tài khoản tại [Vercel](https://vercel.com).

3. **Import dự án**

   - Đăng nhập vào Vercel Dashboard
   - Chọn "New Project"
   - Import repository từ GitHub/GitLab/Bitbucket
   - Chọn repository của dự án

4. **Cấu hình triển khai**

   - Framework Preset: Next.js
   - Build Command: `npm run build` (mặc định)
   - Output Directory: `.next` (mặc định)
   - Install Command: `npm install` (mặc định)

5. **Cấu hình biến môi trường**

   Thêm các biến môi trường cần thiết trong phần Environment Variables.

6. **Triển khai**

   Nhấn "Deploy" để bắt đầu quá trình triển khai.

### Triển khai thủ công

1. **Build dự án**

```bash
npm run build
```

2. **Khởi động server production**

```bash
npm run start
```

### Cập nhật phiên bản

Khi cần cập nhật phiên bản mới:

1. Push code mới lên repository
2. Vercel sẽ tự động phát hiện và triển khai phiên bản mới
3. Kiểm tra logs và preview để đảm bảo mọi thứ hoạt động đúng

## Thực hành tốt

1. **Commit thường xuyên** với mô tả rõ ràng
2. **Tạo branch riêng** cho mỗi tính năng mới
3. **Viết test** cho các tính năng quan trọng
4. **Tối ưu hóa hình ảnh** trước khi đưa vào dự án
5. **Sử dụng TypeScript** cho mọi component và function
6. **Tuân thủ cấu trúc thư mục** đã được thiết lập
7. **Sử dụng React Query** cho các thao tác với API
8. **Sử dụng Zustand** cho state management phía client

## Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Vercel Documentation](https://vercel.com/docs)
