import './App.css'
export function App () {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src="https://unavatar.io/antonio" alt="Avatar de antonio" />
                <div className="tw-followCard-info">
                    <strong>Antonio Jose Jimenez</strong>
                    <span className="tw-followCard-infoUserName">@Antonio</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}