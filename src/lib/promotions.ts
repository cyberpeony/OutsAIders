import { db } from "@/lib/db";

export const generatePromotion = async () => {
    const calificacion = "tiendaA";

    const byePromotion = await db.calis.create({
        data: {
            calificacion,
        }
    })
    return byePromotion;
}