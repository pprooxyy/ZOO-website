const React = require('react');

function Navbar(props) {
  const { rates, user } = props;

  return (
    <div className="nav-wrapper">
      <ul className="nav-ul">
        <li>
          <a href="/">
            <div className="logo-container"></div>
          </a>
        </li>
        <li>
          <a href="/">Домашняя</a>
        </li>
        <li>
          <a href="/animals">Животные</a>
        </li>
        <li>
          <div
            className="modal fade"
            id="ModalToggle"
            aria-hidden="true"
            aria-labelledby="ModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="ModalToggleLabel">
                    Тарифы на посещение зоопарка...
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h5 style={{ color: 'blue' }}>Будние дни с 9-00 до 18-00</h5>
                  <table>
                    <tr>
                      <th align="center">Категория</th>
                      <th align="center">Стоимость(₽)</th>
                    </tr>
                    <tr>
                      <td>Для пенсионеров</td>
                      <td className="tarif-value" align="center">
                        {rates[0].pensioner}
                      </td>
                    </tr>
                    <tr>
                      <td>Для посетителей старше 18 лет</td>
                      <td className="tarif-value" align="center">
                        {rates[0].adult}
                      </td>
                    </tr>
                    <tr>
                      <td>Для детей старше 7 лет</td>
                      <td className="tarif-value" align="center">
                        {rates[0].child}
                      </td>
                    </tr>
                    <tr>
                      <td>Для детей младше 7 лет</td>
                      <td className="tarif-value" align="center">
                        {rates[0].preschool}
                      </td>
                    </tr>
                  </table>
                  <br />
                  <h5 style={{ color: 'blue' }}>
                    Выходные дни с 9-00 до 18-00
                  </h5>
                  <table>
                    <tr>
                      <th align="center">Категория</th>
                      <th align="center">Стоимость (₽)</th>
                    </tr>
                    <tr>
                      <td>Для пенсионеров</td>
                      <td className="tarif-value" align="center">
                        {rates[1].pensioner}
                      </td>
                    </tr>
                    <tr>
                      <td>Для посетителей старше 18 лет</td>
                      <td className="tarif-value" align="center">
                        {rates[1].adult}
                      </td>
                    </tr>
                    <tr>
                      <td>Для детей старше 7 лет</td>
                      <td className="tarif-value" align="center">
                        {rates[1].child}
                      </td>
                    </tr>
                    <tr>
                      <td>Для детей младше 7 лет</td>
                      <td className="tarif-value" align="center">
                        {rates[1].preschool}
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="modal-footer">
                  {user ? (
                    <button
                      className="btn btn-primary"
                      data-bs-target="#ModalToggle2"
                      data-bs-toggle="modal"
                    >
                      Изменить тарифы
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="ModalToggle2"
            aria-hidden="true"
            aria-labelledby="ModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="ModalToggleLabel2">
                    Внесите изменнения в стоимость...
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form name="editTarif" method="POST" action="/admin/tarifs">
                    <h5 style={{ color: 'blue' }}>
                      Будние дни с 9-00 до 20-00
                    </h5>
                    <table>
                      <tr>
                        <th align="center">Категория</th>
                        <th align="center">Стоимость (₽)</th>
                      </tr>
                      <tr>
                        <td>Для пенсионеров</td>
                        <td>
                          <input
                            name="weekdayPensioner"
                            type="number"
                            defaultValue={rates[0].pensioner}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Для посетителей старше 18 лет</td>
                        <td>
                          <input
                            name="weekdayAdult"
                            type="number"
                            defaultValue={rates[0].adult}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Для детей старше 7 лет</td>
                        <td>
                          <input
                            name="weekdayChild"
                            type="number"
                            defaultValue={rates[0].child}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Для детей младше 7 лет</td>
                        <td>
                          <input
                            name="weekdayPreschool"
                            type="text"
                            defaultValue={rates[0].preschool}
                          />
                        </td>
                      </tr>
                    </table>
                    <br />
                    <h5 style={{ color: 'blue' }}>
                      Выходные дни с 9-00 до 20-00
                    </h5>
                    <table>
                      <tr>
                        <th align="center">Категория</th>
                        <th align="center">Стоимость (₽)</th>
                      </tr>
                      <tr>
                        <td>Для пенсионеров</td>
                        <td>
                          <input
                            name="weekendPensioner"
                            type="number"
                            defaultValue={rates[1].pensioner}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Для посетителей старше 18 лет</td>
                        <td>
                          <input
                            name="weekendAdult"
                            type="number"
                            defaultValue={rates[1].adult}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Для детей старше 7 лет</td>
                        <td>
                          <input
                            name="weekendChild"
                            type="number"
                            defaultValue={rates[1].child}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Для детей младше 7 лет</td>
                        <td>
                          <input
                            name="weekendPreschool"
                            type="number"
                            defaultValue={rates[1].preschool}
                          />
                        </td>
                      </tr>
                    </table>
                    <br />
                    <button
                      id="changeTarifSave"
                      type="submit"
                      className="btn btn-primary"
                      data-bs-target="#ModalToggle"
                      data-bs-toggle="modal"
                    >
                      Сохранить
                    </button>
                  </form>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#ModalToggle"
                    data-bs-toggle="modal"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a href="#" data-bs-target="#ModalToggle" data-bs-toggle="modal">
            Тарифы
          </a>
        </li>
        {user ? (
          <li>
            <a href="/admin/profile">{user.user_name}</a>
          </li>
        ) : (
          <li>
            <a href="/admin/login">Для Администратора</a>
          </li>
        )}
        {user ? (
          <li>
            <a href="/admin/logout">Выход</a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

module.exports = Navbar;
