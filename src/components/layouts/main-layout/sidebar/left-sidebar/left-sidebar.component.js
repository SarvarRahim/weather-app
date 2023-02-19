import { MainLogo } from '@components/atoms';
import { SidebarNav } from './sidebar-nav';
import { StyledLeftSidebar, SidebarOverlay } from './left-sidebar.style';
import { hoc } from '@utils/hoc';
import burger from '@assets/img/Vector.png';
import { useLeftSidebarProps } from './left-sidebar.props';

const LeftSidebar = hoc(useLeftSidebarProps, ({ collapse, toggleCollapse }) => {
  return (
    <>
      <StyledLeftSidebar collapse={collapse}>
        <div className='logo'>
          <MainLogo />
          <p collapse={collapse}>NAJOT TA'LIM</p>
          <div className='btn-img'>
            <img
              src={burger}
              className={collapse ? 'burger burger-active' : 'burger'}
              onClick={toggleCollapse}
              alt=''
            />
          </div>
        </div>
        <SidebarNav collapse={collapse} />
      </StyledLeftSidebar>
      {collapse && <SidebarOverlay onClick={toggleCollapse} />}
    </>
  );
});

export { LeftSidebar };
