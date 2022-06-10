const submenuStyle = (showSubMenu) => {
  return {
    position: 'absolute',
    display: showSubMenu ? 'initial' : 'none',
    left: '32rem',
    top: '5rem',
    width: '20rem',
    background: '#fff',
    borderRadius: '.5rem',
    margin: '0',
    overflow: 'hidden',
    boxShadow: '0px 4px 25px 1px rgba(0,0,0,0.10)',
  };
};

const styles = {
  navButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    height: '3rem',
    width: '7rem',
    borderRadius: '.5rem',
    margin: '0 1rem',
  },
  navActionButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    height: '3rem',
    width: '6rem',
    borderRadius: '.5rem',
    padding: '0 .5rem',
    margin: '0 .5rem',
  },
  specialty: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem',
    borderRadius: '1rem',
  },
  specialty_icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
  },
  plans: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '1rem',
    width: '10rem',
  },
  plans_icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
  },
  services_icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '1rem',
    background: '#f5f5f5',
  },
  footer_icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    background: '#FEF9F1',
  },

  menu_icon_bg: {
    position: 'absolute',
    left: '0',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    background: '#fcf0e8',
    margin: '0 0 0 .5rem',
    zIndex: 0,
  },

  menu_icon: {
    position: 'absolute',
    top: '1.5rem',
    left: '1rem',
  },

  about_submenu: {
    position: 'absolute',
    display: 'none' ,
    left: '31rem',
    top: '4rem',
    width: '20rem',
    background: '#fff',
    borderRadius: '.5rem',
    margin: '0',
    overflow: 'hidden',
    boxShadow: '0px 4px 25px 1px rgba(0,0,0,0.10)',
  },

  plans_submenu: {
    position: 'absolute',
    display: 'none' ,
    left: '40rem',
    top: '4rem',
    width: '20rem',
    background: '#fff',
    borderRadius: '.5rem',
    margin: '0',
    overflow: 'hidden',
    boxShadow: '0px 4px 25px 1px rgba(0,0,0,0.10)',
  },

  menu_listitem: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '6rem',
    width: {sm: '60%', md: '100%'}
  },

  divider: {
    width: '5%',
    height: '.2rem',
    margin: '.5rem 0',
    background: '#ffa500',
    borderRadius: '50%',
  },
  whatsappWidget: {
    '& .whatsapp_widget_wrapper': {
      bottom: { sm: '80px !important' },
      right: { sm: '20px !important' },
      width: { sm: 50 },
    },
    '& .whatsapp_widget_icon': {
      webkitBoxShadow: '3px 3px 5px 1px rgba(0,0,0,0.50)  !important',
      mozBoxShadow: '3px 3px 5px 1px rgba(0,0,0,0.50)  !important',
      boxShadow: '3px 3px 5px 1px rgba(0,0,0,0.50)  !important',
      border: 'none',
    },
  },
};

export { styles };
