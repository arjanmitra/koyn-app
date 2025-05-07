interface GETProps {
    params: { id: string }
}

export async const GET = (req: Request, { params }: GETProps) {
    fetch(`https://api.coincap.io/v3/assets/${params.id}`, {
        headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` }
    })
        .then((res) => {
            const data = await res.json();
            return new Response(JSON.stringify(data.data))
        })
}