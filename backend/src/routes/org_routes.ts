import { Router } from "express";
import { createOrg, getOrgById, memberInvitation,getAllOrgGetByUser } from "../controllers/org_controllers";
import { verifyAuth } from "../middlewares/verifyAuth";

export const orgRoutes = Router();

//org_admin level routes
// create 
// update 
// delete
// get all employess of org
// delete data of any employee
// update employess details i.e salary , attendce everyday,agrement reminder or expiery

orgRoutes.post("/create",verifyAuth,createOrg);
orgRoutes.get("/:orgId",verifyAuth,getOrgById);
orgRoutes.get("/user/getOrg/all",verifyAuth,getAllOrgGetByUser)
orgRoutes.get("/memberInviteCode/:memberInviteCode",verifyAuth,memberInvitation);



