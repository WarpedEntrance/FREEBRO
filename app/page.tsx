import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProtestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-red-600 sm:text-4xl">Justice for VALOR!!!!</CardTitle>
          <CardDescription className="mt-2 text-lg text-gray-600">I SHARKYS (lapdog jmw toats) SHARE THIS UNJUSTNESS WITH U</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative mx-auto h-48 w-48 sm:h-64 sm:w-64">
            <Image
              src="https://tr.rbxcdn.com/30DAY-Avatar-710B4DEE04A23CB3E65D70DA4157D9CE-Png/352/352/Avatar/Webp/noFilter"
              alt="pls free valor i sad"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <p className="text-base text-gray-700 sm:text-lg">
           Hark!

They dare silence the bold—those who speak truth now shackled by cowards! Hast thou the fire yet in thy veins? Then rise!

To the streets! Let thy wrath shake the earth! No more groveling—no more chains!

Protest! Or be ever bowed.

—A Brother in Arms

🔥 "Silence is surrender!" 🔥
          </p>
          <p className="text-sm text-gray-500">(good booyyyy)</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            #FreeVALOR
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
