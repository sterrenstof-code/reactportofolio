import "./sidebar.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Sidebar() {
  
  return (
    <div className="sidebar">
      <ul className="sidebar__social">
        <li><a href="www.github.com"><GitHubIcon color="primary"/></a></li>
        <li><a href="www.github.com"><InstagramIcon color="primary"/></a></li>
        <li><a href="www.github.com"><TwitterIcon color="primary"/></a></li>
        <li><a href="www.github.com"><LinkedInIcon color="primary"/></a></li>
        <li><a href="www.github.com"><GitHubIcon color="primary"/></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
