// import { storage } from '../utils';
// import * as storageKey from '../constant/storage';

// const defaultPlaylist = {
//     name: 'all',
//     id: 1,
//     songs: [{
//         id: 1,
//         src: '/songs/ai-la-nguoi-thuong-em.mp3',
//         name: 'Ai là người thương em',
//         singer: 'Quân A.P',
//         image: '/images/songs/7e6088a95d78a12eae1cf55d0b3cc3b9.webp',
//         listened: 0,
//         lyric: `
//             Người con gái anh từng yêu sao rồi? 
//             Có một mình đi dưới mưa lúc buồn?
//             Lệ còn rơi khi ngồi xem
//             Thước phim buồn?
//             Ôm thật chặt vào ai khóc như đứa trẻ?
//             Người con gái anh từng yêu quên rồi
//             Có những chiều tay nắm tay ngóng đợi
//             Hoàng hôn xuống
//             Ta kề vai nói những lời
//             Rằng đôi ta sẽ chỉ cần nhau thôi
//             Hà ha ha ha há ha hà ha
//             Cô gái anh yêu hay quan tâm anh
//             Và nhắc anh bao điều
//             Em thích hoa hồng và mùa đông
//             Được anh ôm phía sau lưng
//             Em nói bên anh qua bao nơi
//             Em cảm thấy rất nhẹ nhàng
//             Vậy giờ ai là người cho em yên bình?
//             Em muốn xa anh khi yêu thương
//             Đang gìn giữ vẫn an lành
//             Xóa những hi vọng một tình yêu
//             Và hai trái tim xanh
//             Quên hết bao năm đi bên em
//             Anh thật không thể làm được
//             Người mình thương
//             Giờ chẳng nhớ tên quen thuộc
//             Người con gái anh từng yêu quên rồi
//             Có những chiều tay nắm tay ngóng đợi
//             Hoàng hôn xuống
//             Ta kề vai nói những lời
//             Rằng đôi ta sẽ chỉ cần nhau thôi
//             Hà ha ha ha há ha hà ha
//             Cô gái anh yêu hay quan tâm anh
//             Và nhắc anh bao điều
//             Em thích hoa hồng và mùa đông
//             Được anh ôm phía sau lưng
//             Em nói bên anh qua bao nơi
//             Em cảm thấy rất nhẹ nhàng
//             Vậy giờ ai là người cho em yên bình?
//             Em muốn xa anh khi yêu thương
//             Đang gìn giữ vẫn an lành
//             Xóa những hi vọng một tình yêu
//             Và hai trái tim xanh
//             Quên hết bao năm đi bên em
//             Anh thật không thể làm được
//             Người mình thương
//             Giờ chẳng nhớ tên quen thuộc
//             Cô gái anh yêu hay quan tâm anh
//             Và nhắc anh bao điều
//             Em thích hoa hồng và mùa đông
//             Được anh ôm phía sau lưng
//             Em nói bên anh qua bao nơi
//             Em cảm thấy rất nhẹ nhàng
//             Vậy giờ ai là người cho em yên bình?
//             Em muốn xa anh khi yêu thương
//             Đang gìn giữ vẫn an lành
//             Xóa những hi vọng một tình yêu
//             Và hai trái tim xanh
//             Quên hết bao năm đi bên em
//             Anh thật không thể làm được
//             Người mình thương
//             Giờ chẳng nhớ tên quen thuộc
//             Người mình thương
//             Giờ chẳng nhớ tên anh rồi
//         `
//     }, {
//         id: 2,
//         src: '/songs/anh-chang-sao-ma.mp3',
//         name: 'Anh chẳng sao mà',
//         singer: 'Khang Việt',
//         image: '/images/songs/anh-chang-sao-ma.webp',
//         listened: 0,
//         lyric: `
//             Có lẽ hôm nay anh không hề muốn
//             Nhưng chuyện tình yêu chúng ta
//             Đang có những giây phút rất buồn
//             Đã đến với nhau trong sự lặng im
//             Thế bây giờ
//             Mình nên cách xa trong im lặng
//             Nhìn những thứ đáng lẽ là của riêng anh
//             Mà lâu nay anh thấy em trao tặng ai
//             Người hãy nói tất cả là tại anh sai đi
//             Để khi xa rời
//             Anh không thấy đau trong lòng
//             Thật lòng ngỡ bên nhau trăm năm
//             Cớ sao mọi chuyện đi quá xa xăm
//             Tồn tại giữa cô đơn
//             Không em là điều rất khó
//             Phải chăng đã thương em yêu em
//             Quá lâu nên giờ chán ngán tên nhau
//             Em đã không cần anh bên cạnh về sau
//             Ngày còn ấm yêu thương bên nhau
//             Chẳng bao giờ ngờ sẽ có hôm nay
//             Nhìn giây phút em quay lưng đi
//             Thật sự buồn lắm
//             Trời xanh bỗng hôm nay cho mưa
//             Giấu đi lệ nhòa trong lúc chia xa
//             Em cứ đi
//             Đừng lo anh chẳng sao mà
//             Nhìn những thứ đáng lẽ là của riêng anh
//             Mà lâu nay anh thấy em trao tặng ai
//             Người hãy nói tất cả là tại anh sai đi
//             Để khi xa rời
//             Anh không thấy đau trong lòng
//             Thật lòng ngỡ bên nhau trăm năm
//             Cớ sao mọi chuyện đi quá xa xăm
//             Tồn tại giữa cô đơn
//             Không em là điều rất khó
//             Phải chăng đã thương em yêu em
//             Quá lâu nên giờ chán ngán tên nhau
//             Em đã không cần anh bên cạnh về sau
//             Ngày còn ấm yêu thương bên nhau
//             Chẳng bao giờ ngờ sẽ có hôm nay
//             Nhìn giây phút em quay lưng đi
//             Thật sự buồn lắm
//             Trời xanh bỗng hôm nay cho mưa
//             Giấu đi lệ nhòa trong lúc chia xa
//             Em cứ đi
//             Đừng lo anh chẳng sao mà
//             Thật lòng ngỡ bên nhau trăm năm
//             Cớ sao mọi chuyện đi quá xa xăm
//             Tồn tại giữa cô đơn
//             Không em là điều rất khó
//             Phải chăng đã thương em yêu em
//             Quá lâu nên giờ chán ngán tên nhau
//             Em đã không cần anh bên cạnh về sau
//             Ngày còn ấm yêu thương bên nhau
//             Chẳng bao giờ ngờ sẽ có hôm nay
//             Nhìn giây phút em quay lưng đi
//             Thật sự buồn lắm
//             Trời xanh bỗng hôm nay cho mưa
//             Giấu đi lệ nhòa trong lúc chia xa
//             Em cứ đi
//             Đừng lo anh chẳng sao mà
//             Em cứ đi
//             Đừng lo anh chẳng sao mà
//         `
//     },{
//         id: 3,
//         src: '/songs/dau-de-truong-thanh.mp3',
//         name: 'Đau để trưởng thành',
//         singer: 'Only C',
//         image: '/images/songs/dau-de-truong-thanh.webp',
//         listened: 0,
//         lyric: `Yêu ai mà chẳng có lúc buồn
//         Thương ai rồi cũng đến lúc buông
//         Ừ thì anh phải đứng dậy thôi
//         Nhật ký cất đi rồi
//         Thôi nói ra làm gì
//         Lại càng thêm đau
//         Nếu quay thời gian đến lúc đầu
//         Để nói rằng
//         Này chàng trai hãy nhớ cho
//         Người con gái cô đơn lắm đấy
//         Tại sao không níu lấy
//         Để mất đi một người
//         Chỉ vì vô tâm
//         Có những điều mà anh muốn nói
//         Không kịp đâu đã quá muộn rồi
//         Có những điều mà anh từng ngó lơ
//         Lại là ước mơ bao người
//         Là tại anh
//         Nỗi đau đi đến suốt đời
//         Khi yêu chỉ cần như thế
//         Chia tay có khi
//         Làm mình lớn lên
//         Mỗi khi buồn thì em cứ khóc
//         Khóc thật to mỗi anh nghe thôi
//         Mỗi khi đau niềm đau cũng xé đôi
//         Vì anh vẫn yêu em nhiều
//         Dòng thời gian sẽ trôi
//         Để anh thấy rằng
//         Chia tay thì ta mới thấu
//         Mình đã sai từ đâu
//         Nếu quay thời gian đến lúc đầu
//         Để nói rằng
//         Này chàng trai hãy nhớ cho
//         Người con gái yếu đuối lắm đấy
//         Tại sao không níu lấy
//         Để mất đi một người
//         Chỉ vì vô tâm
//         Có những điều mà anh muốn nói
//         Không kịp đâu đã quá muộn rồi
//         Có những điều mà anh từng ngó lơ
//         Lại là ước mơ bao người
//         Là tại anh nỗi đau
//         Đi đến suốt đời
//         Khi yêu chỉ cần như thế
//         Chia tay có khi
//         Làm mình lớn lên
//         Mỗi khi buồn thì em cứ khóc
//         Khóc thật to mỗi anh nghe thôi
//         Mỗi khi đau niềm đau cũng xé đôi
//         Vì anh vẫn yêu em nhiều
//         Dòng thời gian sẽ trôi
//         Để anh thấy rằng
//         Chia tay thì ta mới thấu
//         Mình đã sai từ đầu
//         Có những điều mà anh muốn nói
//         Không kịp đâu đã quá muộn rồi
//         Có những điều mà anh từng ngó lơ
//         Lại là ước mơ bao người
//         Là tại anh nỗi đau
//         Đi đến suốt đời
//         Khi yêu chỉ cần như thế
//         Chia tay có khi
//         Làm mình lớn lên
//         Mỗi khi buồn thì em cứ khóc
//         Khóc thật to mỗi anh nghe thôi
//         Mỗi khi đau niềm đau cũng xé đôi
//         Vì anh vẫn yêu em nhiều
//         Dòng thời gian sẽ trôi
//         Để anh thấy rằng
//         Chia tay thì ta mới thấu
//         Mình đã sai từ đầu
//         Dòng thời gian sẽ trôi
//         Để anh thấy rằng
//         Chia tay thì ta mới thấu
//         Mình đã sai từ đầu`
//     },{
//         id: 4,
//         src: '/songs/dung-nguoi-dung-thoi-diem.mp3',
//         name: 'Đúng người đúng thời điểm',
//         singer: 'Thanh Hưng',
//         image: '/images/songs/dung-nguoi-dung-thoi-diem.webp',
//         listened: 0,
//         lyric: `Hôm nay em nói
//         Em cần đôi tay
//         Ôm lấy em và dắt em đến
//         Những chốn yêu xa ngàn mây
//         Hôm nay tạm ngưng hết
//         Những âu lo thường ngày
//         Chỉ cần em ngồi sau
//         Cùng anh, ta đi đến đâu cũng được
//         Nếu như một ngày
//         Anh không giống như em
//         Từng trông mong
//         Chẳng ôm được thế giới
//         Liệu em có yêu không
//         Vì anh ôm được mỗi trái tim
//         Thật nhỏ bé của người anh yêu
//         Có em thật ấm áp như
//         Một bài hát anh phiêu
//         Mình giữ nhau thật chắc nhé
//         Nếu đi ta cùng đi
//         Mọi bão giông đều qua
//         Khi con tim cùng theo lí trí
//         Giờ gió đông lạnh giá lắm
//         Cứ yên tâm còn anh và nắng vàng
//         Cùng sưởi ấm để em
//         Cảm thấy yêu thương nhiều hơn
//         Việc của em là yêu anh
//         Có mưa giông thì để anh lo
//         Chẳng hứa xua được mây đen
//         Nhưng bình yên khi bên anh
//         Tìm thấy em người anh yêu
//         Lúc yêu thương
//         Tựa như nắng cuối chiều
//         Từ nay em sẽ làm cuộc sống
//         Tốt hơn bao điều
//         Hôm nay em nói
//         Em cần đôi tay
//         Ôm lấy em và dắt em đến
//         Những chốn yêu xa ngàn mây
//         Hôm nay tạm ngưng hết
//         Những âu lo thường ngày
//         Chỉ cần em ngồi sau
//         Cùng anh, ta đi đến đâu cũng được
//         Nếu như một ngày
//         Anh không giống như em
//         Từng trông mong
//         Chẳng ôm được thế giới
//         Liệu em có yêu không
//         Vì anh ôm được mỗi trái tim
//         Thật nhỏ bé của người anh yêu
//         Có em thật ấm áp như
//         Một bài hát anh phiêu
//         Mình giữ nhau thật chắc nhé
//         Nếu đi ta cùng đi
//         Mọi bão giông đều qua
//         Khi con tim cùng theo lí trí
//         Giờ gió đông lạnh giá lắm
//         Cứ yên tâm còn anh và nắng vàng
//         Cùng sưởi ấm để em
//         Cảm thấy yêu thương nhiều hơn
//         Việc của em là yêu anh
//         Có mưa giông thì để anh lo
//         Chẳng hứa xua được mây đen
//         Nhưng bình yên khi bên anh
//         Tìm thấy em người anh yêu
//         Lúc yêu thương
//         Tựa như nắng cuối chiều
//         Từ nay em sẽ làm cuộc sống
//         Tốt hơn bao điều
//         Mình giữ nhau thật chắc nhé
//         Nếu đi ta cùng đi
//         Mọi bão giông đều qua khi
//         Con tim cùng theo lí trí
//         Giờ gió đông lạnh giá lắm
//         Cứ yên tâm còn anh và nắng vàng
//         Cùng sưởi ấm để em
//         Cảm thấy yêu thương nhiều hơn
//         Việc của em là yêu anh
//         Có mưa giông thì để anh lo
//         Chẳng hứa xua được mây đen
//         Nhưng bình yên khi bên anh
//         Tìm thấy em người anh yêu
//         Lúc yêu thương
//         Tựa như nắng cuối chiều
//         Từ nay em sẽ làm cuộc sống
//         Tốt hơn bao điều`
//     },{
//         id: 5,
//         src: '/songs/dung-nhu-thoi-quen.mp3',
//         name: 'Đừng như thói quen',
//         singer: 'JayKil, Sara Luu',
//         image: '/images/songs/dung-nhu-thoi-quen.webp',
//         listened: 0,
//         lyric: `Em từng là duy nhất
//         Là cả khoảng trời trong anh
//         Nhưng đến bây giờ
//         Anh vẫn như vậy
//         Chỉ là cần một khoảng trống
//         Yêu chậm lại một chút
//         Để biết ta cần nhau hơn
//         Anh cũng rất sợ ta phải xa nhau
//         Nhưng tình yêu không như lúc trước
//         Đừng để thời gian bên nhau
//         Là thói quen
//         Là ở cạnh bên nhưng rất xa xôi
//         Từng ngày cảm giác trong tim
//         Cứ thế phai đi
//         Lạc nhau ta đâu có hay
//         Đừng để yêu thương kia
//         Giờ là nỗi đau
//         Cô đơn về nơi căn phòng ấy
//         Dành tất cả thanh xuân
//         Để thương một người
//         Giờ chỉ còn là giấc mơ
//         Anh từng là thế giới
//         Là cả khoảng trời trong em
//         Nhưng đến bây giờ lúc em cần
//         Anh như không quan tâm
//         Chỉ cần dành một phút
//         Để hỏi em về ngày hôm nay
//         Sao đến bây giờ em phải mong chờ
//         Một điều giản đơn đến thế
//         Đừng để thời gian bên nhau
//         Là thói quen
//         Là ở cạnh bên nhưng rất xa xôi
//         Từng ngày cảm giác trong tim
//         Cứ thế phai đi
//         Lạc nhau ta đâu có hay
//         Đừng để yêu thương kia
//         Giờ là nỗi đau
//         Cô đơn về nơi căn phòng ấy
//         Dành tất cả thanh xuân
//         Để thương một người
//         Giờ chỉ còn trong giấc mơ
//         Nếu như một ngày có quay trở lại
//         Liệu vẫn còn đâu lời yêu lúc xưa
//         Em dành tất cả thanh xuân
//         Chỉ để yêu anh thôi
//         Sao giờ chẳng thể nào chạm tới
//         Sao ta chẳng thể hiểu cho nhau
//         Anh vẫn mong bên em
//         Chỉ là phút giây có khi mỏi mệt
//         Biết nỗi nhớ chẳng thể
//         Kéo ký ức quay về
//         Nên tập quên dù biết sẽ đau
//         Đừng để thời gian bên nhau
//         Là thói quen
//         Là ở cạnh bên nhưng rất xa xôi
//         Từng ngày cảm giác trong tim
//         Cứ thế phai đi
//         Lạc nhau ta đâu có hay
//         Đừng để yêu thương kia
//         Giờ là nỗi đau
//         Cô đơn về nơi căn phòng ấy
//         Dành tất cả thanh xuân
//         Để thương một người
//         Giờ chỉ còn là giấc mơ
//         Còn là giấc mơ`
//     },{
//         id: 6,
//         src: '/songs/sao-em-vo-tinh.mp3',
//         name: 'Sao em vô tình',
//         singer: 'Jack, Liam',
//         image: '/images/songs/sao-em-vo-tinh.webp',
//         listened: 0,
//         lyric: `Em về chưa? Đang ở đâu?
//         Ngoài trời thì đổ mưa
//         Bước chân người đi, xa dần xa
//         Lệ nhòe trên khóe mi
//         Em nói thương anh, yêu anh, vì anh
//         Nắng hay mưa vẫn ở cạnh nhau
//         Sao giờ đành khuất lối
//         Chìm bóng tối, lệ chia phôi
//         Hoa bàng rơi, mây mù giăng
//         Tạm biệt hương tóc thơm
//         Chúc em bình yên, mong tình duyên
//         Ngọt ngào đôi cánh tay
//         Cô bé năm xưa yêu anh giờ đây
//         Hóa lung linh cơn gió nhẹ lay
//         Em dịu dàng biết mấy
//         Tà áo trắng, chiều tung bay
//         Sao em vô tình anh quá em ơi!
//         Con tim đau lòng thương lắm em ơi
//         Tìm về lại một chút hương thơm
//         Tìm về lại một chút ngây ngô
//         Đợi chờ ai? Đợi chờ ai?
//         Bên kia sông buồn mây trắng êm trôi
//         Bao năm hẹn thề em có thương tôi?
//         Mình hãy ngồi lại với nhau đi
//         Chuyện trò một chút mai khi
//         Dòng thời gian vô tình người mang
//         Nơi đó anh chờ em!
//         Chúng ta sẽ yêu
//         Nhưng đáng tiếc là ai khác
//         Không phải nhìn nhau nữa đâu
//         Duyên tình ta giờ phai nhạt
//         Nơi cánh chim ùa về
//         Nơi nỗi đau gần kề
//         Chẳng đi cùng lề
//         Vì thế như thằng hề
//         Kệ cuộc đời này trôi cứ như áng mây
//         Ngày bay đến nơi đó đây
//         Xây giấc mơ với nhau
//         Mà đau lắm em có hay!
//         Thương thân ai bờ vai ngày xưa yêu thương
//         Mà giờ đành xa xăm
//         Muôn phương cuối con đường!
//         Ngày hôm ấy người đã nói
//         Lời chia tay, lệ hoen cay
//         Lòng đau nhói, chẳng thể khóc
//         Vì còn thương, vì còn yêu
//         Giá như em đừng đi
//         Giá như em ở đây
//         Lắng nghe anh vài câu
//         Trái tim anh đậm sâu
//         Nhưng sao bây giờ khuất lối
//         Chìm bóng tối, lệ chia phôi
//         Sao em vô tình anh quá em ơi!
//         Con tim đau lòng thương lắm em ơi
//         Tìm về lại một chút hương thơm
//         Tìm về lại một chút ngây ngô
//         Đợi chờ ai? Đợi chờ ai?
//         Bên kia sông buồn mây trắng êm trôi
//         Bao năm hẹn thề em có thương tôi?
//         Mình hãy ngồi lại với nhau đi
//         Chuyện trò này một chút mai khi
//         Dòng thời gian vô tình người mang
//         Nơi đó anh chờ em!
//         Dù Thiên ý bắt ta phải xa nhau
//         Mạnh mẽ bước nói anh chẳng sao đâu
//         Lặng lẽ vớt ánh sáng phía trăng soi
//         Đi về lẻ loi, cô đơn
//         Một lần nữa để anh viết cho em
//         Một lần nữa để anh nhớ tên em
//         Một lần nữa thôi, một lần nữa thôi
//         Sao em vô tình anh quá em ơi!
//         Con tim đau lòng thương lắm em ơi
//         Tìm về lại một chút hương thơm
//         Tìm về lại một chút ngây ngô
//         Đợi chờ ai? Đợi chờ ai?
//         Bên kia sông buồn mây trắng êm trôi
//         Bao năm hẹn thề em có thương tôi?
//         Mình hãy ngồi lại với nhau đi
//         Chuyện trò này một chút mai khi
//         Dòng thời gian vô tình người mang
//         Nơi đó anh chờ em!`
//     },{
//         id: 7,
//         src: '/songs/hoi-tham-nhau.mp3',
//         name: 'Hỏi thăm nhau',
//         singer: 'Lê Bảo Bình',
//         image: '/images/songs/hoi-tham-nhau.png',
//         listened: 0,
//         lyric: `Chiều nay nhìn em bước vội
//         Không biết cuộc sống em
//         Dạo này thế nào rồi
//         Anh vẫn như thế thôi
//         Vẫn cô đơn sớm tối
//         Nhiều lúc bối rối
//         Con tim anh lạc lối
//         Lúc anh yêu thương em hết lòng
//         Sao em lại nỡ
//         Bỏ anh trong đợi mong
//         Anh như kẻ ngu si
//         Chẳng bận tâm điều gì
//         Để rồi nhìn em
//         Em ra đi
//         Nhiều lúc anh cứ suy nghĩ
//         Anh đã làm sai điều gì
//         Mà em ra đi
//         Không một lời từ li
//         Hóa ra lúc ta yêu nhau
//         Em cũng chỉ toàn dối lừa
//         Và rồi em coi anh
//         Như một kẻ thừa
//         Anh chẳng thể ngờ được đâu
//         Khi tất cả những gì em giấu
//         Trao hết cho em ngọt ngào
//         Rồi nhận lại chỉ toàn niềm đau
//         Nước mắt không vơi được đâu
//         Khi tình yêu đã phai màu
//         Đành nhìn em đến với người sau
//         Chiều nay nhìn em bước vội
//         Không biết cuộc sống em
//         Dạo này thế nào rồi
//         Anh vẫn như thế thôi
//         Vẫn cô đơn sớm tối
//         Nhiều lúc bối rối
//         Con tim anh lạc lối
//         Lúc anh yêu thương em hết lòng
//         Sao em lại nỡ
//         Bỏ anh trong đợi mong
//         Anh như kẻ ngu si
//         Chẳng bận tâm điều gì
//         Để rồi nhìn em
//         Em ra đi
//         Nhiều lúc anh cứ suy nghĩ
//         Anh đã làm sai điều gì
//         Mà em ra đi
//         Không một lời từ li
//         Hóa ra lúc ta yêu nhau
//         Em cũng chỉ toàn dối lừa
//         Và rồi em coi anh
//         Như một kẻ thừa
//         Anh chẳng thể ngờ được đâu
//         Khi tất cả những gì em giấu
//         Trao hết cho em ngọt ngào
//         Rồi nhận lại chỉ toàn niềm đau
//         Nước mắt không vơi được đâu
//         Khi tình yêu đã phai màu
//         Đành nhìn em đến với người sau
//         Nhiều lúc anh cứ suy nghĩ
//         Anh đã làm sai điều gì
//         Mà em ra đi
//         Không một lời từ li
//         Hóa ra lúc ta yêu nhau
//         Em cũng chỉ toàn dối lừa
//         Và rồi em coi anh
//         Như một kẻ thừa
//         Anh chẳng thể ngờ được đâu
//         Khi tất cả những gì em giấu
//         Trao hết cho em ngọt ngào
//         Rồi nhận lại chỉ toàn niềm đau
//         Nước mắt không vơi được đâu
//         Khi tình yêu đã phai màu
//         Đành nhìn em
//         đến với người sau
//         Đành nhìn em
//         đến với người sau`
//     },{
//         id: 8,
//         src: '/songs/duyen-minh-lo.mp3',
//         name: 'Duyên mình lỡ',
//         singer: 'Hương Tràm',
//         image: '/images/songs/duyen-minh-lo.webp',
//         listened: 0,
//         lyric: `Mình chia tay nhau từ đây
//         Tổn thương trong em cũng nhiều rồi
//         Tình yêu này đâu có lỗi gì
//         Lỗi là thuộc về hai chúng ta
//         Yêu gặp nhau là duyên
//         Khi hết duyên tự đi
//         Nghĩ vậy, cho nhẹ lòng hơn
//         Đừng oán trách nữa nhé
//         Xin người hãy đừng than van
//         Vì phía trước hai ta
//         Sẽ còn đoạn đường rất dài
//         Tình yêu đó sẽ mãi
//         Chỉ là kỉ niệm thôi anh
//         Sẽ không còn những yêu thương
//         Cũng như giận hờn
//         Ngày mai nắng sẽ ấm
//         Sẽ làm một ngày tươi xanh
//         Ngày mai sẽ bước tiếp
//         Con đường mà ta đã chọn
//         Để rồi khi quay lưng ngoảnh lại
//         Nhìn về quá khứ
//         Sẽ không còn
//         Những yêu thương cho nhẹ lòng hơn.
//         Em yêu ơi
//         Nếu như mình đã quyết định vậy
//         Thì giờ anh cũng chẳng biết
//         Phải thế nào
//         Chỉ còn lại đây tiếc nuối
//         Cùng xót xa
//         Trách ai bây giờ
//         Mình chia tay nhau từ đây
//         Tổn thương trong em cũng nhiều rồi
//         Tình yêu này đâu có lỗi gì
//         Lỗi là thuộc về hai chúng ta
//         Yêu gặp nhau là duyên
//         Khi hết duyên tự đi
//         Nghĩ vậy, cho nhẹ lòng hơn
//         Đừng oán trách nữa nhé
//         Xin người hãy đừng than van
//         Vì phía trước hai ta
//         Sẽ còn đoạn đường rất dài
//         Tình yêu đó sẽ mãi
//         Chỉ là kỉ niệm thôi anh
//         Sẽ không còn những yêu thương
//         Cũng như giận hờn
//         Ngày mai nắng sẽ ấm
//         Sẽ làm một ngày tươi xanh
//         Ngày mai sẽ bước tiếp
//         Con đường mà ta đã chọn
//         Để rồi khi quay lưng ngoảnh lại
//         Nhìn về quá khứ
//         Sẽ không còn
//         Những yêu thương cho nhẹ lòng hơn.
//         Mai này khi mọi chuyện qua đi
//         Tình ta sẽ phai dần
//         Duyên mình lỡ, tình cũng đã xa
//         Gặp nhau xin đừng níu kéo
//         Mình chia tay nhau đi
//         Sẽ chẳng còn gì đâu anh
//         Tình yêu đó đến lúc
//         Chúng ta cùng nhau khép lại
//         Để rồi khi quay lưng
//         Ngoảnh lại nhìn về quá khứ
//         Sẽ không còn những yêu thương
//         Cho nhẹ lòng hơn.
//         Sẽ không còn những yêu thương…`
//     },{
//         id: 9,
//         src: '/songs/lang-nghe-nuoc-mat.mp3',
//         name: 'Lăng nghe nước mắt',
//         singer: 'Mr.Siro',
//         image: '/images/songs/lang-nghe-nuoc-mat.webp',
//         listened: 0,
//         lyric: `Buổi sáng hôm ấy
//         Thấy em chợt khóc
//         Rồi vội vàng lau
//         Thật nhanh nước mắt
//         Vẫn biết ta đã
//         Sai khi gặp nhau
//         Vì em đã có người yêu
//         Goodbye I'm fine
//         Xin đừng bận tâm
//         Đừng buồn vì
//         Những gì ta đã có
//         Anh biết sẽ vẫn
//         Quan tâm nhiều lắm
//         Dù anh chẳng là ai
//         Nghẹn ngào giây phút
//         Ta chấp nhận
//         Sống không cần nhau
//         Chẳng khác chi trái đất này
//         Làm sao tồn tại
//         Không có mặt trời
//         Chỉ biết lặng nhìn
//         Em quay lưng bước đi
//         Lòng anh thắt lại
//         Nghĩ đến mình
//         Sẽ không gặp lại
//         Tình yêu đâu phải
//         Ai cũng may mắn
//         Tìm được nhau
//         Chẳng giống như chúng ta
//         Tìm được nhau
//         Rồi lại hoang phí duyên trời
//         Tại sao phải
//         Rời xa nhau mãi mãi
//         Biết đến khi nào
//         Chúng ta nhận ra
//         Chẳng thể quên được nhau
//         Em có thể dối
//         Anh trong lời nói
//         Nhưng làm sao dối
//         được trong ánh mắt
//         Tình yêu thì không
//         Có sai hoặc đúng
//         Chỉ cần trái tim rung động
//         Nghẹn ngào giây phút
//         Ta chấp nhận
//         Sống không cần nhau
//         Chẳng khác chi trái đất này
//         Làm sao tồn tại
//         Không có mặt trời
//         Chỉ biết lặng nhìn
//         Em quay lưng bước đi
//         Lòng anh thắt lại
//         Nghĩ đến mình
//         Sẽ không gặp lại
//         Tình yêu đâu phải
//         Ai cũng may mắn
//         Tìm được nhau
//         Chẳng giống như chúng ta
//         Tìm được nhau
//         Rồi lại hoang phí duyên trời
//         Tại sao phải
//         Rời xa nhau mãi mãi
//         Biết đến khi nào
//         Chúng ta nhận ra
//         Chẳng thể quên được nhau
//         Nghẹn ngào giây phút
//         Ta chấp nhận
//         Sống không cần nhau
//         Chẳng khác chi trái đất này
//         Làm sao tồn tại
//         Không có mặt trời
//         Chỉ biết lặng nhìn
//         Em quay lưng bước đi
//         Lòng anh thắt lại
//         Nghĩ đến mình
//         Sẽ không gặp lại
//         Tình yêu đâu phải
//         Ai cũng may mắn
//         Tìm được nhau
//         Chẳng giống như chúng ta
//         Tìm được nhau
//         Rồi lại hoang phí duyên trời
//         Tại sao phải
//         Rời xa nhau mãi mãi
//         Biết đến khi nào
//         Chúng ta nhận ra
//         Chẳng thể quên được nhau
//         Từ nay đôi ta
//         Không được đi bên nhau
//         Không được trao nhau yêu thương
//         Phải quên hết đi`
//     },{
//         id: 10,
//         src: '/songs/banh-mi-khong.mp3',
//         name: 'Bánh mì không',
//         singer: 'Đạt G, DuUyen',
//         image: '/images/songs/banh-mi-khong.webp',
//         listened: 0,
//     },{
//         id: 11,
//         src: '/songs/buc-tranh-tu-nuoc-mat.mp3',
//         name: 'Bức tranh từ nước mắt',
//         singer: 'Mr.Siro',
//         image: '/images/songs/buc-tranh-tu-nuoc-mat.webp',
//         listened: 0,
//     },{
//         id: 12,
//         src: '/songs/co-doc-vuong.mp3',
//         name: 'Cô độc vương',
//         singer: 'Thiên Tú',
//         image: '/images/songs/co-doc-vuong.webp',
//         listened: 0,
//     },{
//         id: 13,
//         src: '/songs/buon-cua-anh.mp3',
//         name: 'Buồn của anh',
//         singer: 'Đạt G',
//         image: '/images/songs/buon-cua-anh.png',
//         listened: 0,
//     },{
//         id: 14,
//         src: '/songs/co-tham-khong-ve.mp3',
//         name: 'Cô Thắm không về',
//         singer: 'Phát Hồ, JokeS Bil, Thiện, DingLong',
//         image: '/images/songs/co-tham-khong-ve.webp',
//         listened: 0,
//     },{
//         id: 15,
//         src: '/songs/cu-ngo-la-anh.mp3',
//         name: 'Cứ ngỡ là anh',
//         singer: 'Đinh Tùng Huy',
//         image: '/images/songs/cu-ngo-la-anh.webp',
//         listened: 0,
//     },{
//         id: 16,
//         src: '/songs/em-gai-mua.mp3',
//         name: 'Em gái mưa',
//         singer: 'Hương Tràm',
//         image: '/images/songs/em-gai-mua.webp',
//         listened: 0,
//     },{
//         id: 17,
//         src: '/songs/het-thuong-can-nho.mp3',
//         name: 'Hết thương cạn nhớ',
//         singer: 'Đức Phúc',
//         image: '/images/songs/het-thuong-can-nho.webp',
//         listened: 0,
//     },{
//         id: 18,
//         src: '/songs/hon-ca-yeu.mp3',
//         name: 'Hơn cả yêu',
//         singer: 'Đức Phúc',
//         image: '/images/songs/hon-ca-yeu.webp',
//         listened: 0,
//     },{
//         id: 19,
//         src: '/songs/mot-buoc-yeu-van-dam-dau.mp3',
//         name: 'Một bước yêu vạn dặm đau',
//         singer: 'Mr.Siro',
//         image: '/images/songs/mot-buoc-yeu-van-dam-dau.webp',
//         listened: 0,
//     },{
//         id: 20,
//         src: '/songs/sau-tat-ca.mp3',
//         name: 'Sau tất cả',
//         singer: 'ERIK',
//         image: '/images/songs/sau-tat-ca.webp',
//         listened: 0,
//     },{
//         id: 21,
//         src: '/songs/thich-thi-den.mp3',
//         name: 'Thích thì đến',
//         singer: 'Lê Bảo Bình',
//         image: '/images/songs/thich-thi-den.webp',
//         listened: 0,
//     },{
//         id: 22,
//         src: '/songs/chieu-hom-ay.mp3',
//         name: 'Chiều hôm ấy',
//         singer: 'JayKil',
//         image: '/images/songs/chieu-hom-ay.webp',
//         listened: 0,
//     },{
//         id: 23,
//         src: '/songs/cuoc-song-em-on-khong.mp3',
//         name: 'Cuộc sống em ổn không',
//         singer: 'Vương Anh Tú',
//         image: '/images/songs/cuoc-song-em-on-khong.webp',
//         listened: 0,
//     },{
//         id: 24,
//         src: '/songs/do-ta-khong-do-nang.mp3',
//         name: 'Độ ta không độ nàng',
//         singer: 'Thái Quỳnh',
//         image: '/images/songs/do-ta-khong-do-nang.webp',
//         listened: 0,
//     },{
//         id: 25,
//         src: '/songs/dung-ai-nhac-ve-anh-ay.mp3',
//         name: 'Đừng ai nhắc về anh ấy',
//         singer: 'Trà My Idol',
//         image: '/images/songs/dung-ai-nhac-ve-anh-ay.webp',
//         listened: 0,
//     },{
//         id: 26,
//         src: '/songs/sai-nguoi-sai-thoi-diem.mp3',
//         name: 'Sai người sai thời điêm',
//         singer: 'Thanh Hưng',
//         image: '/images/songs/sai-nguoi-sai-thoi-diem.webp',
//         listened: 0,
//     },{
//         id: 27,
//         src: '/songs/song-xa-anh-chang-de-dang.mp3',
//         name: 'Sống xa anh chẳng dễ dàng',
//         singer: 'Bảo Anh',
//         image: '/images/songs/song-xa-anh-chang-de-dang.webp',
//         listened: 0,
//     },{
//         id: 28,
//         src: '/songs/tat-nuoc-dau-dinh.mp3',
//         name: 'Tát nươc đầu đình',
//         singer: 'Link Lee',
//         image: '/images/songs/tat-nuoc-dau-dinh.webp',
//         listened: 0,
//     },{
//         id: 29,
//         src: '/songs/trai-tim-cua-em-cung-biet-dau.mp3',
//         name: 'Trái tim của em cũng biết đau',
//         singer: 'Bảo Anh',
//         image: '/images/songs/trai-tim-cua-em-cung-biet-dau.webp',
//         listened: 0,
//     },{
//         id: 30,
//         src: '/songs/yeu-mot-nguoi-vo-tam.mp3',
//         name: 'Yêu một người vô tâm',
//         singer: 'Bảo Anh',
//         image: '/images/songs/yeu-mot-nguoi-vo-tam.webp',
//         listened: 0,
//     },{
//         id: 31,
//         src: '/songs/co-gai-1m52.mp3',
//         name: 'Cố gái 1m52',
//         singer: 'Huy R, Tùng Viu',
//         image: '/images/songs/co-gai-1m52.webp',
//         listened: 0,
//     },{
//         id: 32,
//         src: '/songs/nguoi-la-thoang-qua.mp3',
//         name: 'Người lạ thoáng qua',
//         singer: 'Đinh Tùng Huy',
//         image: '/images/songs/nguoi-la-thoang-qua.webp',
//         listened: 0,
//     }]
// };

// if (!storage.get(storageKey.DEFAULT_PLAYLIST)) {
//     storage.set(storageKey.DEFAULT_PLAYLIST, defaultPlaylist);
// }

// export default defaultPlaylist;