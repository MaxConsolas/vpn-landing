import Link from "next/link"
import { BackgroundSelector } from "@/components/background-selector"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { OFFER_EXECUTOR } from "@/lib/offer-executor"

export default function PrivacyPolicyPage() {
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
            <p className="text-muted-foreground text-sm mb-2">🔒 Документ</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Политика конфиденциальности и обработки персональных данных
            </h1>
            <p className="mt-4 text-muted-foreground">
              Дата вступления в силу: {OFFER_EXECUTOR.privacyPolicyEffectiveLabel}
            </p>
          </header>

          <div className="space-y-10 text-[15px] md:text-base leading-relaxed text-muted-foreground">
            <section className="rounded-xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-foreground mb-3">Оператор персональных данных</h2>
              <p>
                Оператором персональных данных при оказании услуг IRIS VPN является{" "}
                <span className="text-foreground font-medium">{OFFER_EXECUTOR.fullName}</span> (самозанятый,
                плательщик НПД), ИНН {OFFER_EXECUTOR.inn}. Связь по вопросам ПДн и реализации прав субъекта:{" "}
                <a
                  href={`mailto:${OFFER_EXECUTOR.email}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {OFFER_EXECUTOR.email}
                </a>
                .{" "}
                <Link href="/offer" className="text-primary underline-offset-4 hover:underline">
                  Публичная оферта
                </Link>
                .
              </p>
            </section>

            <section>
              <p>
                IRIS VPN ставит приоритетом защиту вашей цифровой приватности. Ниже описано, какие данные
                обрабатываются при использовании Сервиса (сайт, приложения, бот) и в каких целях. Мы не строим
                профиль вашей активности в сети в форме логов, перечисленных в разделе 1.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Политика отсутствия логов (Zero Logs)</h2>
              <p className="mb-3">
                Мы придерживаемся политики отсутствия журналов активности в том смысле, что не ведём и не храним
                для последующего раскрытия следующие сведения в привязке к вашей сессии VPN:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>историю посещённых веб-сайтов и использованных приложений;</li>
                <li>ваш исходный IP-адрес как запись о факте подключения к Сервису в целях последующего расследования;</li>
                <li>DNS-запросы в виде журнала, позволяющего восстановить посещённые ресурсы;</li>
                <li>содержимое трафика и переписки;</li>
                <li>временные метки начала и конца сессии в целях построения истории ваших подключений.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Данные, которые мы обрабатываем (минимально необходимые)
              </h2>
              <p className="mb-3">Для работы Сервиса может обрабатываться ограниченный объём информации:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <span className="text-foreground">Учётная запись:</span> идентификатор пользователя и/или адрес
                  электронной почты — для регистрации, авторизации, управления подпиской и обращений в поддержку;
                </li>
                <li>
                  <span className="text-foreground">Агрегированные технические показатели:</span> например, общий
                  объём переданных данных (в байтах) на уровне учётной записи или сервера без фиксации
                  посещённых адресов и без хранения содержимого трафика — для стабильности и планирования нагрузки;
                </li>
                <li>
                  <span className="text-foreground">Диагностика (по возможности и с вашим согласием в приложении):</span>{" "}
                  обезличенные отчёты о сбоях (тип устройства, версия ОС) без привязки к содержимому трафика.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Цели использования данных</h2>
              <p className="mb-3">Сведения из раздела 2 используются только для:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>предоставления и продления доступа к VPN;</li>
                <li>балансировки нагрузки и обеспечения работоспособности серверов;</li>
                <li>обработки обращений в техническую поддержку;</li>
                <li>исполнения требований законодательства Российской Федерации в отношении сведений, которые
                  Оператор действительно хранит (например, данные об оплате и учётной записи — в пределах
                  законного запроса).</li>
              </ul>
              <p className="mt-3">
                Правовые основания обработки: исполнение договора (публичная оферта), согласие субъекта — где оно
                запрошено отдельно (например, опциональная диагностика), обязанности Оператора по закону.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Запросы государственных органов</h2>
              <p>
                Мы соблюдаем законодательство Российской Федерации. Логи активности в сети в формате, описанном в
                п. 1, намеренно не создаются и не хранятся; сведения, связывающие конкретного пользователя с
                историей действий в интернете в этом объёме, передать невозможно. Иные данные (например, сведения
                об учётной записи или фактах оплаты, если они у Оператора есть) могут быть предоставлены строго в
                случаях и порядке, предусмотренных законом.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Сторонние сервисы</h2>
              <p>
                При оплате могут использоваться платёжные провайдеры (банки, агрегаторы, платёжные системы).
                Платёжные реквизиты банковских карт и идентификаторы платежа обрабатываются на стороне
                платёжного оператора в соответствии с его правилами и сертификацией. IRIS VPN не получает полный
                номер вашей карты и не хранит его у себя.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Ваши права</h2>
              <p className="mb-3">
                В соответствии с законодательством РФ о персональных данных вы вправе запросить уточнение, блокирование
                или уничтожение ваших персональных данных (если они обрабатываются), отозвать согласие на обработку
                (где обработка основана на согласии) — с учётом необходимости хранить отдельные сведения по правилам
                налогового и бухгалтерского учёта.
              </p>
              <p>
                Удаление учётной записи и уточнение объёма обрабатываемых данных — по запросу на{" "}
                <a
                  href={`mailto:${OFFER_EXECUTOR.email}?subject=Персональные%20данные%20IRIS%20VPN`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {OFFER_EXECUTOR.email}
                </a>
                .
              </p>
            </section>

            <p className="text-sm text-muted-foreground border-t border-border/50 pt-6">
              Документ действует с: {OFFER_EXECUTOR.privacyPolicyEffectiveLabel}
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
