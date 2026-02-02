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

    // 게시물 데이터 배열
    const posts = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=300&h=300&fit=crop',
            alt: 'Post 1',
            href: '#',
            isPinned: true,
            likes: 1234,
            comments: 56
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop',
            alt: 'Post 2',
            href: '#',
            isPinned: false,
            likes: 892,
            comments: 23
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop',
            alt: 'Post 3',
            href: '#',
            isPinned: false,
            likes: 567,
            comments: 12
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
            alt: 'Post 4',
            href: '#',
            isPinned: false,
            likes: 2341,
            comments: 89
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop',
            alt: 'Post 5',
            href: '#',
            isPinned: false,
            likes: 445,
            comments: 7
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop',
            alt: 'Post 6',
            href: '#',
            isPinned: false,
            likes: 678,
            comments: 34
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop',
            alt: 'Post 7',
            href: '#',
            isPinned: false,
            likes: 123,
            comments: 5
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
            alt: 'Post 8',
            href: '#',
            isPinned: false,
            likes: 987,
            comments: 45
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
            alt: 'Post 9',
            href: '#',
            isPinned: false,
            likes: 1567,
            comments: 78
        }
    ];

    // 고정 게시물 배지 HTML
    const pinnedBadgeHTML = `
        <div class="post-badge">
            <div class="post-badge-inner">
                <svg aria-label="고정 게시물" class="post-pinned-icon" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                    <title>고정 게시물</title>
                    <path d="m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z"></path>
                </svg>
            </div>
        </div>
    `;

    // 게시물 컴포넌트 로드 및 렌더링
    const loadPosts = async () => {
        try {
            const templateResponse = await fetch('components/profile-post.html');
            const template = await templateResponse.text();

            const postsGrid = document.getElementById('posts-grid-container');
            if (!postsGrid) return;

            postsGrid.innerHTML = '';

            posts.forEach(post => {
                let postHTML = template
                    .replace('POST_HREF', post.href)
                    .replace('POST_ALT', post.alt)
                    .replace('POST_IMAGE_URL', post.imageUrl)
                    .replace('POST_LIKES', post.likes || 0)
                    .replace('POST_COMMENTS', post.comments || 0)
                    .replace('POST_BADGE', post.isPinned ? pinnedBadgeHTML : '');

                postsGrid.innerHTML += postHTML;
            });
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    };

    // 게시물 로드
    loadPosts();
});

