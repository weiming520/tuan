// 确保DOM加载完成后执行
        document.addEventListener('DOMContentLoaded', function() {
            const photos = document.querySelectorAll('.photo');
            let currentIndex = 0;
            const intervalTime = 3000; // 3秒切换

            function switchPhoto() {
                // 隐藏当前照片
                const current = photos[currentIndex];
                current.classList.remove('active');
                current.classList.add('prev');

                // 计算下一张索引
                currentIndex = (currentIndex + 1) % photos.length;

                // 显示下一张照片
                const next = photos[currentIndex];
                next.classList.remove('prev');
                next.classList.add('active');

                // 重置prev类（避免样式残留）
                setTimeout(() => {
                    current.classList.remove('prev');
                }, 600);
            }

            // 启动定时切换
            setInterval(switchPhoto, intervalTime);
            
            // 控制台打印测试（验证是否获取到元素）
            console.log('照片数量：', photos.length); // 正常应该输出3
        });


