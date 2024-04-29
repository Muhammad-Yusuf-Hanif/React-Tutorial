import React from 'react';

interface ImageLinkProps {
    src: string;
    href: string;
    alt?: string;
    className?: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ src, href, alt = '', className }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img
                src={src}
                alt={alt}
                className={className}
                style={{ cursor: 'pointer' }} // Optionally add cursor style
            />
        </a>
    );
};

export default ImageLink;
