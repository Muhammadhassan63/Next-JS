/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/login',
                destination: '/about',
                permanent:true
            }
        ]
    }
}

module.exports = nextConfig
