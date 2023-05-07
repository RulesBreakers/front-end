import "./assets/style/components.css"
import "./assets/style/index.css"
import "./assets/style/main.css"
import "./assets/icons/css/all.min.css";


export const Footer = ()=>{
    return (
        <>
            <footer className="footer" id="footer">
            <div className="footer__account">
                <div className="footer__account__content">
                <h2 className="footer__account__content__title">Onyrix</h2>
                <div className="footer__account__content__checks">
                    <div className="footer__account__content__checks__element">
                    <i className="fas fa-check"></i>
                    smart
                    </div>

                    <div className="footer__account__content__checks__element">
                    <i className="fas fa-check"></i>
                    without limitation
                    </div>

                    <div className="footer__account__content__checks__element"></div>
                </div>
                </div>
                <div className="footer__account__actions">
                <p className="footer__account__action__description">
                    <strong>Onyrix</strong> vous guide vers une meilleure compréhension de vous-même à travers vos rêves <br />
                    Qu'attendez-vous?Transformez vos rêves en réalité.
                </p>

                <button className="btn btn--bounce btn--outline" >Commencez tout de suite</button>
                </div>
            </div>

            <div className="footer__bar">
                Made with <i className="fas fa-heart"></i> by Rules Breakers
                <a href="#" target="_blank">
                </a>
            </div>
            </footer>
        </>
    )
}