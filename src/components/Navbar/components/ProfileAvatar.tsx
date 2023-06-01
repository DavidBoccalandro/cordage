import styled from 'styled-components';

interface ProfileImage {
  src: string;
  alt: string;
}

const ProfileAvatarContainer = styled.div<{ src: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ src }) => src ? 'transparent' : 'var(--red400)'};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 500;
    font-size: 15.5556px;
    line-height: 21px;
    color: var(--white);
    cursor: default;
  }
`;

const ProfileImage = styled.img<ProfileImage>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileAvatar = ({ src, alt }: ProfileImage) => {
  return (
    <ProfileAvatarContainer src={src}>
      {src ? <ProfileImage src={src} alt={alt} /> : <span>D</span>}
    </ProfileAvatarContainer>
  );
};
