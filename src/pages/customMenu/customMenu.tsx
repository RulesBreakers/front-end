import './assets/style/components.css';
import './assets/style/index.css';
import './assets/style/main.css';
import './assets/icons/css/all.min.css';

export const CustomMenu = () => {
  return (
    <>
      <nav className='banner__navbar'>
        <div className='banner__navbar__logo v-flex--center'>
          <h2>Onyrix</h2>
        </div>

        <div className='banner__navbar__nav f-flex--center'>
          <a href='#section_what_is' className='banner__navbar__nav__anchor'>
            Apropos
          </a>
          <a href='#section_tarif' className='banner__navbar__nav__anchor'>
            Tarifs
          </a>
          <a href='#footer' className='banner__navbar__nav__anchor'>
            FAQ
          </a>
        </div>

        <div className='banner__navbar__search f-flex--center'>
          <label className='banner__nav__search__container'>
            <input
              type='text'
              id='search-bar'
              className='banner__navbar__search__input'
            />
            <i className='fas fa-caret-left'></i>
            <i className='fas fa-search' title='search'></i>
          </label>
        </div>
      </nav>
    </>
  );
};
