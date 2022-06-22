import UsersController from "../../controllers/UsersController";

export default function Handle(req, res) {
  switch (req.method) {
    case "POST":
      UsersController.create(req, res);
      break;
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
