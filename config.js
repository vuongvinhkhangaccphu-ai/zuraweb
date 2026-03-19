const CONFIG = {
    serverName: "ZURA",
    serverNameHighlight: "COMMUNITY",
    serverSlogan: "Cộng Đồng Sinh Tồn Đỉnh Cao",
    serverIP: "zura.wtf",
    logoUrl: "https://scontent.fsgn24-1.fna.fbcdn.net/v/t1.15752-9/638527108_1640090943848141_7922010075347131250_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHouNmPhEPeJB8YP-oSaZ3NwsW3Bjzf3oLCxbcGPN_egumYVpLo-sj7TCEyw243gzUR3dRw9oWtAwt8DnuBDi7n&_nc_ohc=Yd96IGTgHPUQ7kNvwF8RxGI&_nc_oc=AdqUdhc9z5fTTIHLfbk5SFNpgoNTLYyy2Az7z2M9Dj0iAm8tahyFJ60PeF3CaW_QAnE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsgn24-1.fna&_nc_ss=8&oh=03_Q7cD4wFUSdDUtoTBJclqmseGfVOa0BDoSSVYbXXGNat5hNc7Jw&oe=69E37245",
    versions: {
        java: "1.7-1.21.11",
        bedrock: "Hỗ trợ bản mới nhất"
    },

    bgImage: "https://a.storyblok.com/f/296405/1920X1080/85c8f43648/cherry-blossom-grove-in-minecraft.jpg", 

    social: {
        facebook: "https://m.me/j/AbZuniz70Xzx93iR/?send_source=gc:copy_invite_link_c",
        discord: "https://discord.gg/DfKWbDMTa3"
    },

    about: [
        { icon: "fa-coins", title: "Kinh Tế Cân Bằng", desc: "Hệ thống mua bán, cày cuốc hợp lý, không lạm phát." },
        { icon: "fa-users", title: "Cộng Đồng Thân Thiện", desc: "Nơi giao lưu, kết bạn và tham gia event hấp dẫn." },
        { icon: "fa-server", title: "Server Ổn Định", desc: "Ping xanh mượt mà, cấu hình máy chủ khủng." }
    ],

    rules: [
        "Không sử dụng Hack, Cheat, X-Ray hay các Mod gây mất cân bằng game.",
        "Không toxic, chửi bậy, lừa đảo hay xúc phạm người chơi khác.",
        "Không lợi dụng Bug/Lỗi game. Báo cáo Bug để nhận thưởng.",
        "Tôn trọng Ban Quản Trị và quyết định của Staff.",
        "Không quảng cáo server khác dưới mọi hình thức."
    ],

    ranks: [
        { id: "vip", name: "VIP", color: "#d1d5db", popular: false, features: ["/chatcolor gold", "/pv 1", "Nhận thêm 2 sethome", "Bộ kit nhận hằng ngày VIP"] },
        { id: "vip+", name: "VIP+", color: "#cd7f32", popular: false, features: ["/chatcolor {gold,blue}", "/pv {1,2}", "Cộng thêm 2 sethome", "Bộ kit nhận hằng ngày VIP+"] },
        { id: "svip", name: "SVIP", color: "#9ca3af", popular: false, features: ["/chatcolor {gold,blue,yellow}", "/pv {1,2,3}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "Nhận thêm 2 sethome", "Bộ kit nhận hằng ngày SVIP"] },
        { id: "svip+", name: "SVIP+", color: "#f59e0b", popular: false, features: ["/chatcolor {gold,blue,yellow,lime}", "/pv {1,2,3,4,5}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận được thêm 3 sethome", "Bộ kit nhận hằng ngày SVIP+"] },
        { id: "mvip", name: "MVIP", color: "#06b6d4", popular: false, features: ["/chatcolor {gold,blue,yellow,lime,pink}", "/pv {1,2,3,4,5,6,7}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/hat (đội vật phẩm đang cầm trên tay)", "/beezooka (đại bác ong ??)", "/kittycanon (pháo mèo ??)", "/near (xem ai đang gần mình nhất)", "/invsee {tên người chơi} (xem túi đồ của người chơi khác nhưng không thể lấy đồ 🗿)", "/claimfly (bay trong claim)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận được 3 sethome", "Bộ kit nhận hằng ngày MVIP"] },
        { id: "mvip+", name: "MVIP+", color: "#10b981", popular: true, features: ["/chatcolor {gold,blue,yellow,lime,pink,darkred}", "/pv {1,2,3,4,5,6,7,8,9,10}", "/nick (đổi tên hiển thị có thể đổi tên màu in đậm gạch ngang tuỳ thích)", "/hat (đội vật phẩm đang cầm trên tay)", "/beezooka (đại bác ong ??)", "/kittycanon (pháo mèo ??)", "/near (xem ai đang gần mình nhất)", "/invsee {tên người chơi} (xem túi đồ của người chơi khác nhưng không thể lấy đồ 🗿)", "/anvil (sử dụng đe bằng lệnh)", "/smithingtable (sử dụng bàn rèn bằng lệnh)", "/bottom (dịch chuyển xuống dưới gần nhất)", "/top (dịch chuyển lên đầu)", "/condense (lập tức đổi vật phẩm có thể chế thành khối ra khối)", "/claimfly (bay trong claim)", "/ie rename (đổi tên cho vật phẩm cầm trên tay - có thể đổi màu tên)", "Nhận 3 sethome", "Bộ kit nhận hằng ngày MVIP+"] }
    ],
    guides: [
        { title: "Làm sao để kiếm tiền?", content: "Bạn có thể farm quái, thu hoạch nông sản và dùng /sellgui để bán hoặc đánh tài xỉu, coinflip." },
        { title: "Cách claim đất bảo vệ nhà", content: "Sử dụng xẻng vàng, click chuột phải vào 2 góc chéo nhau để tạo vùng bảo vệ." },
        { title: "Làm sao để nhận quà khởi đầu?", content: "Gõ lệnh /code WELCOME trong game để nhận 20k money nhé." }
    ],

    pricing: [
        { item: "VIP", price: "50 points" },
        { item: "VIP+", price: "60 points (CẦN RANK VIP)" },
        { item: "SVIP", price: "70 points (CẦN RANK VIP+)" },
        { item: "SVIP+", price: "80 points (CẦN RANK SVIP)" },
        { item: "MVIP", price: "100 points (CẦN RANK SVIP+)" },
        { item: "MVIP+", price: "140 points (CẦN RANK MVIP)" },
    ]
};
