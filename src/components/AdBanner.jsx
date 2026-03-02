import { useEffect, useRef } from 'react'

export default function AdBanner() {
    const banner = useRef()

    const atOptions = {
        key: 'd704985b48f4aef934098e1011bfd6ff',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }

    useEffect(() => {
        if (banner.current && !banner.current.firstChild) {
            const conf = document.createElement('script')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://pl28827858.effectivegatecpm.com/d7/04/98/d704985b48f4aef934098e1011bfd6ff.js`
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

            banner.current.append(conf)
            banner.current.append(script)
        }
    }, [])

    return (
        <div className="mx-2 my-5 border border-gray-200 min-h-24 flex justify-center items-center text-white text-center" ref={banner}></div>
    )
}
