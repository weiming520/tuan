// 初始化默认账号密码（存储在浏览器localStorage）
if (!localStorage.getItem('kaliTestUser')) {
    localStorage.setItem('kaliTestUser', JSON.stringify({
        username: 'root',
        password: 'kali'
    }));
}

// 登录页面逻辑
if (document.getElementById('loginBtn')) {
    const loginBtn = document.getElementById('loginBtn');
    const errorMsg = document.getElementById('errorMsg');

    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const savedUser = JSON.parse(localStorage.getItem('kaliTestUser'));

        if (username === savedUser.username && password === savedUser.password) {
            // 登录成功，跳转到管理页
            window.location.href = 'dashboard.html';
        } else {
            // 登录失败，显示错误提示
            errorMsg.style.display = 'block';
            setTimeout(() => {
                errorMsg.style.display = 'none';
            }, 3000);
        }
    });
}

// 后台管理页面逻辑
if (document.getElementById('saveBtn')) {
    // 检查是否已登录（防止直接访问管理页）
    if (!document.referrer.includes('login.html') && !localStorage.getItem('kaliTestUser')) {
        window.location.href = 'login.html';
    }

    const saveBtn = document.getElementById('saveBtn');
    const successMsg = document.getElementById('successMsg');
    const logoutBtn = document.getElementById('logoutBtn');

    // 保存新账号密码
    saveBtn.addEventListener('click', () => {
        const newUsername = document.getElementById('newUsername').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();

        if (newUsername && newPassword) {
            localStorage.setItem('kaliTestUser', JSON.stringify({
                username: newUsername,
                password: newPassword
            }));
            // 显示成功提示
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
            // 清空输入框
            document.getElementById('newUsername').value = '';
            document.getElementById('newPassword').value = '';
        }
    });

    // 退出登录
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}