import { db } from "../database/db.js";
import { productSchema } from "../schemas/productSchema.js";

export async function CreatProduct(req, res) {
    const body = req.body;

    if(!body) {
        return res.status(400).send("Erro ao criar o produto");
    }

    const validate = productSchema.validate(body);

    if(validate.error) {
        return res.status(422).send("Produto inválido");
    }

    try {
        await db
        .collection('products')
        .insertOne(body);

        return res.status(201).send("Produto cadastrado");
    }

    catch(error) {
        console.log(error);
        return res.status(400).send("Não foi possível criar o produto");
    }
}

export async function GetProducts(req, res) {
    const productCategory = req.params.productCategory;

    try {
        if(productCategory === "tudo" || !productCategory) {
        const allProducts = await db
        .collection('products')
        .find()
        .toArray();

        return res.status(200).send(allProducts);
        }

        else {
            const allProducts = await db
            .collection('products')
            .find({ category: productCategory})
            .toArray()

            if(allProducts.length === 0 || !allProducts) {
                return res.status(404).send("Nenhum produto encontrado");
            }
            else {
                return res.status(200).send(allProducts);
            }
        }
    }

    catch(error) {
        console.log(error);
        return res.status(400).send("Não foi posível encontrar os produtos");
    }
}