//import user from './user.json';
import s from './Profile.module.css';
import PropTypes from 'prop-types';



function Profile({username,
    tag,
    location,
    avatar,
    stats,}) {
        return (
<div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt={s.tag}
      className={s.avatar}
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.list}>
      <span className={s.label}>followers</span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li className={s.list}>
      <span className={s.label}>views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li className={s.list}>
      <span className={s.label}>likes</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
  </ul>
</div>
        )
    }

    Profile.propTypes = {
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.object.isRequired,
    };

    export default Profile;