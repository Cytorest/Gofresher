import React from 'react';

const Breadcrumb = () => {
    return (
        <div>
            <script>
                {`
                {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@id": "https://gofresher.in",
                    "name": "home"
                }
                },
                {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@id": "https://gofresher.in/jobs",
                    "name": "photos"
                }   
                },
                {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "name": doc.data().jt
                }
                }
                ]
                }
                `}
            </script>
        </div>
    )
};

export default Breadcrumb;