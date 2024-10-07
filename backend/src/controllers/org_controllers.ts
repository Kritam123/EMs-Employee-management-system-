import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { prisma } from "../dbConnect/db";
import { Role } from "@prisma/client";
import { v4 as uuidv4} from "uuid"
 const createOrg = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {orgName,employeeId} = req.body;
        if(!orgName) {
            return res.status(400).json(new ApiError(400,"Organization Name is Missing!"))
        }
        const createOrg = await prisma.organization.create({
            data:{
                orgName,
                createdId:employeeId,
                memberInviteCode:uuidv4(),
                orgMembers:
                {
                    create:[{employeeId,role:Role.ADMIN}]
                }
            },
            
        });
        return res.status(201).json( new ApiResponse(201,{createOrg},"Organization Created"));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,"Internal Server Error"))
    }
});

const memberInvitation = catchAsyncError(async(req:Request,res:Response)=>{
    try {
        const {employeeId,currentUserId} = req.body; 
        const {memberInviteCode} = req.params;
        if(!memberInviteCode) {
            return res.status(400).json(new ApiError(400,"MemberInviteCode is Missing"));
        }
        const isUserExistsInOrg = await prisma.organization.findFirst({
            where:{
                memberInviteCode,
                orgMembers:{
                    some:{
                        employeeId
                    }
                }
            }
        })
        if(isUserExistsInOrg) {
            return res.status(400).json(new ApiError(400,"User Already Exists in Organozation"));
        }
        const updateOrg = await prisma.organization.update({
            where:{
                createdId:currentUserId,
                memberInviteCode
            },
            data:{
                orgMembers:{
                    create:[{employeeId}]
                }
            }
        })
        return res.status(201).json(new ApiResponse(201,{updateOrg},"Updated OrgMember"))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(500,"Internal Server Error"))
    }
})
export {createOrg,memberInvitation}