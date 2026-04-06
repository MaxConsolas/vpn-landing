import Link from "next/link"
import { BackgroundSelector } from "@/components/background-selector"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { OFFER_EXECUTOR } from "@/lib/offer-executor"

export default function OfferPage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundSelector />

      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="relative z-10">
        <article className="max-w-3xl mx-auto px-4 py-24 text-foreground">
          <header className="mb-10">
            <p className="text-muted-foreground text-sm mb-2">📄 Документ</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Оферта на оказание услуг VPN
            </h1>
          </header>

          <div className="space-y-10 text-[15px] md:text-base leading-relaxed text-muted-foreground">
            <section className="rounded-xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-foreground mb-3">Исполнитель</h2>
              <p>
                <span className="text-foreground font-medium">{OFFER_EXECUTOR.fullName}</span>
                , применяющий специальный налоговый режим «Налог на профессиональный доход» (самозанятый),
                ИНН {OFFER_EXECUTOR.inn}. Контактный e-mail:{" "}
                <a
                  href={`mailto:${OFFER_EXECUTOR.email}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {OFFER_EXECUTOR.email}
                </a>
                . Далее по тексту — «Исполнитель». Услуги оказываются без применения НДС в связи с применением НПД.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Общие положения</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  1.1. Настоящий документ — публичная оферта Исполнителя неограниченному кругу лиц на оказание
                  услуг по предоставлению доступа к VPN (далее — «Сервис»). Сервис доступен через сайт и/или
                  программы для ЭВМ, в том числе чат-бота в мессенджерах (далее совместно — «Интерфейс Сервиса»).
                </li>
                <li>
                  1.2. «Заказчик» / «Пользователь» — физическое лицо, осуществившее акцепт оферты.
                </li>
                <li>
                  1.3. Акцептом считается совершение Заказчиком любого из действий: полная или частичная оплата
                  услуг; первое фактическое использование Сервиса после размещения или направления ему условий
                  оферты; нажатие кнопки (или аналога) о согласии с условиями в Интерфейсе Сервиса — в зависимости
                  от того, что наступило ранее.
                </li>
                <li>1.4. Акцепт означает полное и безоговорочное принятие условий оферты.</li>
                <li>
                  1.5. Актуальная редакция оферты размещается в сети Интернет по адресу страницы Оферты на сайте
                  Исполнителя. Дата актуальной редакции указывается в конце документа.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Описание услуги</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  2.1. Исполнитель предоставляет Заказчику доступ к Сервису VPN на срок и на условиях тарифа,
                  выбранного в Интерфейсе Сервиса (подписка / период доступа). Содержание услуги — организация
                  передачи трафика Заказчика через инфраструктуру Исполнителя для целей повышения конфиденциальности
                  и устойчивости соединения в общедоступных сетях; Сервис не является средством гарантированного
                  доступа к каким-либо третьим ресурсам или обхода ограничений.
                </li>
                <li>
                  2.2. Параметры Сервиса (число локаций, протоколы, ограничения на количество устройств и т.п.)
                  отображаются в Интерфейсе Сервиса и могут изменяться Исполнителем; существенные изменения условий
                  потребления после оплаты регулируются пунктом 9 настоящей оферты.
                </li>
                <li>
                  2.3. Услуга предоставляется «как есть» (as is). Исполнитель не гарантирует безопасность сетей
                  третьих лиц, бесперебойность работы сети Интернет вне разумного контроля Исполнителя, достижение
                  определённой скорости или доступность конечных интернет-ресурсов.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Доступ к сервису</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  3.1. Заказчик обязан сохранять конфиденциальность учётных данных, ключей и ссылок на подписку.
                  Ответственность за все действия, совершённые с использованием доступа Заказчика, несёт Заказчик.
                </li>
                <li>
                  3.2. Исполнитель вправе приостановить или ограничить доступ при нарушении настоящей оферты,
                  требований законодательства РФ либо при угрозе устойчивости Сервиса, с уведомлением Заказчика
                  по контактам из Интерфейса Сервиса — по возможности, до применения меры, если иное не
                  противоречит безопасности.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Оплата</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  4.1. Цена услуг указывается в Интерфейсе Сервиса на момент оформления оплаты. Исполнитель вправе
                  изменять цены для новых заказов; оплаченный период не подлежит пересчёту в сторону увеличения.
                </li>
                <li>
                  4.2. Оплата производится в порядке и способами, указанными в Интерфейсе Сервиса, как правило —
                  в форме предоплаты за выбранный период. Исполнитель формирует квитанцию (чек) о приёме оплаты в
                  соответствии с правилами специального налогового режима НПД (в том числе через приложение
                  «Мой налог» или интеграции платёжного оператора, если применимо).
                </li>
                <li>
                  4.3. Возврат уплаченных сумм осуществляется в случаях и порядке, предусмотренных законодательством
                  Российской Федерации (включая положения о защите прав потребителей, где они применимы к
                  отношениям сторон). Иные основания возврата — по соглашению с Исполнителем.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Правила использования (Fair Use)</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>5.1. Сервис предназначен для личного некоммерческого использования Заказчиком в разумных объёмах.</li>
                <li className="text-foreground font-medium mt-3 mb-1">5.2. Запрещается:</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>создавать чрезмерную нагрузку на инфраструктуру Сервиса;</li>
                <li>использовать Сервис преимущественно для автоматизированных, массовых или коммерческих задач без согласия Исполнителя;</li>
                <li>перепродавать, сублицензировать или передавать доступ третьим лицам иным способом.</li>
              </ul>
              <p className="mt-3">
                5.3. При нарушении настоящего раздела Исполнитель вправе ограничить скорость или доступ без выплаты
                компенсаций сверх возвратов, предусмотренных законом.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Ограничения</h2>
              <p className="mb-2">Запрещено использование Сервиса для:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>деятельности, противоречащей законодательству Российской Федерации;</li>
                <li>рассылки спама, сетевых атак и иного злонамеренного воздействия на информационные системы;</li>
                <li>распространения вредоносного программного обеспечения;</li>
                <li>действий, нарушающих работу Сервиса или прав третьих лиц.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Ответственность</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  7.1. Исполнитель не отвечает за перебои работы сетей связи, действия операторов и владельцев
                  интернет-ресурсов, недоступность конкретных сайтов или сервисов, а также за косвенные убытки и
                  упущенную выгоду Заказчика в той мере, в какой такое ограничение допускается законом.
                </li>
                <li>7.2. Использование Сервиса осуществляется Заказчиком на свой риск.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Конфиденциальность и персональные данные</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  8.1. Исполнитель не осуществляет учёт содержания пользовательского трафика (просмотр сайтов,
                  переписка и т.п.). Обрабатываются технические и организационные данные, необходимые для
                  предоставления доступа и учёта оплаты, а также обезличенные или агрегирован — для улучшения работы
                  Сервиса.
                </li>
                <li>
                  8.2. Обработка персональных данных Заказчика осуществляется в соответствии с законодательством РФ
                  о персональных данных. Подробности — в{" "}
                  <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                    Политике конфиденциальности и обработки персональных данных
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Изменения условий</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>
                  9.1. Оферта вступает в силу с момента размещения в Интерфейсе Сервиса и действует до замены её
                  новой редакцией.
                </li>
                <li>
                  9.2. Исполнитель вправе изменять условия оферты в одностороннем порядке, размещая новую редакцию
                  с указанием даты вступления. Для уже оплаченного периода применяются условия, действовавшие на
                  момент оплаты, если иное прямо не согласовано или не предписано законом.
                </li>
                <li>
                  9.3. Продолжение использования Сервиса после вступления в силу новой редакции означает согласие
                  Заказчика с такой редакцией, если иное не установлено законодательством РФ.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Контакты и реквизиты</h2>
              <ul className="list-none space-y-2 pl-0">
                <li>Исполнитель: {OFFER_EXECUTOR.fullName}</li>
                <li>ИНН: {OFFER_EXECUTOR.inn}</li>
                <li>
                  E-mail:{" "}
                  <a
                    href={`mailto:${OFFER_EXECUTOR.email}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {OFFER_EXECUTOR.email}
                  </a>
                </li>
              </ul>
            </section>

            <p className="text-sm text-muted-foreground border-t border-border/50 pt-6">
              Редакция от: {OFFER_EXECUTOR.revisionLabel}
            </p>
          </div>
        </article>

        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">IRIS</h3>
              <p className="text-muted-foreground">High-Performance VPN</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} IRIS VPN. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
