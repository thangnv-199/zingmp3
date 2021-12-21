import Swal from 'sweetalert2';
import storage from '../utils/storage';

const welcome = () => {
    Swal.fire({
        title: 'Chào mừng bạn đến với zingmp3 FAKE ^^;',
        input: 'text',
        inputPlaceholder: 'Vui lòng nhập nickname ...',
        confirmButtonText: 'Tiếp tục',
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonColor: 'var(--purple-primary)',
        inputValidator: value => {
            if (!value) {
                return 'Nickname không được để trống !'
            }
        }
    })
    .then((result) => {
        storage.setUsername(result.value);
        return Swal.fire({
            html: 'Trang web này được xây dựng bằng <span class="font-bold text-blue-500">React</span> và lấy nguyên mẫu từ <span class="font-bold text-red-500">zingmp3.vn</span> , dữ liệu được update ngày 20/12/2021',
            confirmButtonText: 'Tiếp tục',
        })
    })
    .then(() => {
        return Swal.fire({
            html: 'Để có trải nghiệm tốt nhất vui lòng truy cập bằng<span class="font-bold text-red-500"> Window - Chrome</span>, các trình duyệt khác có thể xảy ra các lỗi không mong muốn',
            confirmButtonText: 'Tiếp tục',
        })
    })
    .then(() => {
        return Swal.fire({
            html: 'Có 2 phần nhạc chính cho bạn lựa chọn là <span class="font-bold text-red-500">#Zingchart</span>, <span class="font-bold text-red-500">Nhạc mới</span>, và <span class="font-bold text-red-500">Cá nhân</span> để quản lý các bài hát của bạn, còn các UI còn lại chỉ để trưng cho đẹp ^^',
            confirmButtonText: 'Tiếp tục',
        })
    })
    .then(() => {
        return Swal.fire({
            html: `Để sử dụng chức năng <span class="font-bold text-red-500">Tìm kiếm bài hát</span> và <span class="font-bold text-red-500">xem MV</span> vui lòng đọc kĩ hướng dẫn`,
            confirmButtonText: 'Tiếp tục',
        })
    })
    .then(() => {
        Swal.fire({
            text: 'Chúc bạn nghe nhạc vui vẻ <3',
            confirmButtonText: 'Tiếp tục',
        })
    })
}
export default welcome;