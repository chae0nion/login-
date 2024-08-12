document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 동작을 막음
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // 입력값 검증 (예: 이메일 형식 확인 등)
    if (email && password) {
        console.log('Email:', email);
        console.log('Password:', password);
        // 여기서 서버로 데이터를 전송하는 로직을 추가할 수 있음
        alert('로그인 시도 중...');
    } else {
        alert('이메일과 비밀번호를 모두 입력하세요.');
    }
});
