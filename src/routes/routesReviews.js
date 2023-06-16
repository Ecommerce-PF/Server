const { Router } = require("express");
const router = Router();

const getAllReviews = require("../controllers/Reviews/getAllReviews");
const getReviewsByProduct = require("../controllers/Reviews/getReviewsByProduct");
const createReview = require("../controllers/Reviews/createReview");
const modifyReview = require("../controllers/Reviews/modifyReview");
const deleteReview = require("../controllers/Reviews/deleteReview");

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try{
      const putReviews = await modifyReview(id, req.body)
      res.status(200).json(putReviews);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try{
      const deleteReviews = await deleteReview(id)
      res.status(200).json(deleteReviews);
    }
    catch (error) {
      res.status(400).send(error.message);
    }
  });
  


module.exports = router;

// const { Router } = require("express");
// const router = Router();
// const { Reviews, User, Clothes } = require('../db');

// // router.post("/:id/review", authentication.passport.authenticate('jwt',{session:false}), (req, res) => {
//     router.post("/:id/review", (req, res) => {
//     const { id } = req.params;
//     const { description, rating, likes,userId} = req.body;
//     console.log(req.body)
//     let message;
//     Reviews.create({
//             description: description,
//             rating: rating,
//             likes: likes,
//             productId: id,
//             userId:userId
//     }).then((mensaje) => {
//         res.status(201).json({ message })
//     })
//     .catch(() => res.status(400).send("el comentario no se pudo enviar...revisa bien tus datos!"))
// })

// router.get("/:id/review", (req, res) => {
//     const { id } = req.params;
//     Reviews.findAll({
//         where: {
//             productId: id,
//         },
//         include:{model:User},
//         order:[['id','DESC']]
//     })
//     .then(reviews => res.status(200).json(reviews))
//     .catch(err => res.status(400).json(err.message))
// })

// /* ------------------------------------------------------------------------------- /
// / // S53 : Crear Modelo de Reviews /
// / ------------------------------------------------------------------------------- */


// // router.put("/:id/review/:idReview", authentication.passport.authenticate('jwt',{session:false}), (req, res) => {
//     router.put("/:id/review/:idReview", (req, res) => {
//     const { id, idReview } = req.params;
//     console.log(req.params)
//     const { description,rating,likes,userId} = req.body;
//     Reviews.update(
//         { description: description, rating: rating, likes: likes },
//         { where: { productId: id, id: idReview,userId:userId} },
//     )
//     .then(() => res.status(200).send("el comentario ha sido actualizado exitosamente!"))
//     .catch(err => res.status(400).json(err.message))


// })


// // router.delete("/:id/review/:idReview", authentication.passport.authenticate('jwt',{session:false}), (req, res) => {
// router.delete("/:id/review/:idReview", (req, res) => {    
// const { id, idReview } = req.params;
//     Reviews.destroy({
//         where: {
//             productId: id,
//             id: idReview
//         }
//     })
//     .then(rev => {
//         if (rev > 0) {
//             return res.status(200).json({ message: 'Tu comentario fue eliminado exitosamente!' });
//         } else {
//             return res.json({ message: 'El comentario que quieres borrar no se ha encontrado, verifica que exista de antemano' });
//         }
//     })
//     .catch(err => res.status(400).json(err.message))
// })

// module.exports = router;