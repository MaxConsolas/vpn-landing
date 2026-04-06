import { BackgroundSelector } from "@/components/background-selector"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuidePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundSelector />

      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Инструкция</h1>
            <p className="text-muted-foreground text-lg">
              Пример пошагового гайда по подключению к VPN-клиенту IRIS.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-3">
            <Card className="bg-background/80 border-border/60 backdrop-blur-md">
              <CardHeader>
                <span className="text-4xl font-bold text-primary mb-4">1</span>
                <CardTitle className="text-xl">Установи и открой Нapp</CardTitle>
                <CardDescription>
                  Приложение доступно для всех популярных платформ. В персональной инструкции тебе автоматически
                  предложат подходящий установщик под твою систему — просто скачай его и нажми &quot;Старт&quot; после
                  установки.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background/80 border-border/60 backdrop-blur-md">
              <CardHeader>
                <span className="text-4xl font-bold text-primary mb-4">2</span>
                <CardTitle className="text-xl">Добавь подписку</CardTitle>
                <CardDescription>
                  Нажми кнопку ниже — приложение откроется, и подписка добавится автоматически. Если этого не
                  произошло, закрой приложение и попробуй снова.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                <Button className="w-full rounded-xl py-3 text-base">Добавить подписку</Button>
              </CardContent>
            </Card>

            <Card className="bg-background/80 border-border/60 backdrop-blur-md">
              <CardHeader>
                <span className="text-4xl font-bold text-primary mb-4">3</span>
                <CardTitle className="text-xl">Подключись и пользуйся</CardTitle>
                <CardDescription>
                  В главном разделе нажми большую кнопку включения в центре для подключения. При необходимости
                  выбери другой сервер. Пользуйся :)
                </CardDescription>
              </CardHeader>
            </Card>
          </section>
        </div>

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

