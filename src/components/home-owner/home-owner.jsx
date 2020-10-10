import React from 'react';
import {HomeOwnerType} from '../../types/types';

const HomeOwner = (props) => {
  const {owner, description} = props;

  let classAvatar = `property__avatar-wrapper user__avatar-wrapper`;

  if (owner.isSuper) {
    classAvatar += ` property__avatar-wrapper--pro`;
  }

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={classAvatar}>
          <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {owner.name}
        </span>
        <span className="property__user-status">
          Pro
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

HomeOwner.propTypes = HomeOwnerType;

export default HomeOwner;
