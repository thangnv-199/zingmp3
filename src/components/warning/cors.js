
const CORSwarning = () => {
    return (
        <ul className="text-2xl">
            <li className="mb-3 text-red-600 text-3xl font-bold">Tính năng bị vô hiệu hóa</li>
            <li className="mb-3">Tính năng này lấy dữ liệu từ website: 
                <a className="text-blue-600 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zingmp3.vn/"
                    > zingmp3.vn </a> 
                vì vậy để sử dụng tính năng này vui lòng 
            <span className="font-bold text-red-600"> Chạy trình duyệt mà không có CORS</span> (Run browser without CORS)</li>
            <li className="mb-3">
                Tham khảo cách tắt CORS
                <a
                    className="text-blue-600 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://alfilatov.com/posts/run-chrome-without-cors/"
                > Chrome tại đây </a>
                còn các trình duyệt khác mình không biết các bạn tự search Google nhé :)
            </li>
            <li className="mb-3">Nếu bạn chưa rõ CORS là gì vui lòng tìm hiểu thêm
                <a
                    className="text-blue-600 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://topdev.vn/blog/cors-la-gi/"
                > tại đây </a>
                hoặc
                <a
                    className="text-blue-600 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://viblo.asia/p/tim-hieu-ve-cross-origin-resource-sharing-cors-Az45bGWqKxY"
                > tại đây </a>
            </li>
        </ul>
    )
}

export default CORSwarning;