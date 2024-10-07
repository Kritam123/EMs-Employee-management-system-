import { Router } from "express";
import { createOrg, memberInvitation } from "../controllers/org_controllers";

export const orgRoutes = Router();

//org_admin level routes
// create 
// update 
// delete
// get all employess of org
// delete data of any employee
// update employess details i.e salary , attendce everyday,agrement reminder or expiery

orgRoutes.post("/create",createOrg);
orgRoutes.put("/memberInviteCode/:memberInviteCode",memberInvitation);



