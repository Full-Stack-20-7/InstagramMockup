document.addEventListener('DOMContentLoaded', () => {
    // 컴포넌트 로드 함수
    const loadComponent = (id, path) => {
        fetch(path)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error('Error loading component:', error));
    };

    // 프로필 헤더 로드
    loadComponent('profile-header-container', 'components/profile-header.html');
});

