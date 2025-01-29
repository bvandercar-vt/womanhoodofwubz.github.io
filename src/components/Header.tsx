import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCircleArrowDown,
  faEnvelope,
  faExternalLink,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type HTMLAttributes } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleLink } from './CircleLink'
import { Dialog } from './Dialog'
import { DoubleElement } from './DoubleElement'

export const Header = ({
  scrollToGrid,
}: {
  scrollToGrid: HTMLAttributes<HTMLAnchorElement>['onClick']
}) => {
  return (
    <header>
      <div id="header-center">
        <img src="/Logo.png" alt="Womanhood of Wubz" id="header-logo-img" />
        <div id="bio">
          <DoubleElement>
            <p id="location">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
              Denver, CO
            </p>
            <p>
              Bringing you the accessories that celebrate the magic of good music and the power of
              connection
            </p>
          </DoubleElement>
        </div>
        <div id="buttons">
          <a tabIndex={0} onClick={scrollToGrid}>
            <DoubleElement className="button" id="designed">
              Designed Hats <FontAwesomeIcon icon={faCircleArrowDown} />
            </DoubleElement>
          </a>
          <Dialog
            target={
              <a tabIndex={0}>
                <DoubleElement className="button" id="custom">
                  Custom Hats <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </DoubleElement>
              </a>
            }
            title="Custom Designs"
            className="custom-dialog"
          >
            Custom designs page is in the works! For now, see our{' '}
            <b>
              <a href="https://www.instagram.com/p/DDr601Wx6sF/?img_index=1">
                Instagram post <FontAwesomeIcon icon={faExternalLink} size="xs" />
              </a>
            </b>{' '}
            for information on custom orders, including dimensions for each hat size. We have all
            sizes!
          </Dialog>
        </div>
      </div>
      <div id="header-right">
        <div id="social-links-wrapper" role="region" aria-label="links and social media">
          <span id="connect">
            <DoubleElement>Connect with us!</DoubleElement>
          </span>
          <div id="social-links">
            <CircleLink
              className="instagram"
              title="Instagram"
              icon={faInstagram}
              href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
            />
            <CircleLink className="email" title="Email" icon={faEnvelope} onClick={copyEmail} />
            <CircleLink
              className="soundcloud"
              title="SoundCloud"
              icon={faSoundcloud}
              href="https://soundcloud.com/marisa-kerstanski"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
