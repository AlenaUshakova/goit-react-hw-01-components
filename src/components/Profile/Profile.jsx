import PropTypes from 'prop-types';
import {
  ProfileCard,
  DescriptionCard,
  UserAvatar,
  ProfileName,
  ProfileTagLocation,
  Statscard,
  StatsElement,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <DescriptionCard>
        <UserAvatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTagLocation>@{tag}</ProfileTagLocation>
        <ProfileTagLocation>{location}</ProfileTagLocation>
      </DescriptionCard>

      <Statscard>
        <StatsElement>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsElement>
      </Statscard>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
