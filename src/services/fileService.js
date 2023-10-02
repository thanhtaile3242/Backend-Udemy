const path = require('path');
// Single file
const upLoadSingleFile = async (fileObject) => {
    let uploadPath = path.resolve(__dirname,"../public/images/upload");
    // Get image extension (.jpg, .png)
    let extName = path.extname(fileObject.name);
    // Get image name (without extension)
    let baseName = path.basename(fileObject.name, extName);
    // Create final name and path
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;
    // 
    try{  
        await fileObject.mv(finalPath);
        return {
            status: "success",
            path: finalName,
            error: null,
        }
    } catch(err){
        console.log("check error: ",err);
        return {
            status: "failed",
            path: null,
            error: JSON.stringify(err),
        }
    }
}


const upLoadMultipleFiles = async (filesArr) => {
    try{
        let uploadPath = path.resolve(__dirname,"../public/images/upload");
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++){
        // Get image extension (.jpg, .png)
        let extName = path.extname(filesArr[i].name);
        // Get image name (without extension)
        let baseName = path.basename(filesArr[i].name, extName);
        // Create final name and path
        let finalName = `${baseName}-${Date.now()}${extName}`;
        let finalPath = `${uploadPath}/${finalName}`;
        try{
            await filesArr[i].mv(finalPath);
            resultArr.push({
                status: "success",
                path: finalName,
                filename: filesArr[i].name,
                error: null
            })
            countSuccess++;
        }catch(err){
                resultArr.push({
                status: "failed",
                path: null,
                filename: filesArr[i].name,
                error: JSON.stringify(err)
        })}
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr,
        }
    }catch(error){
        console.log(error);
    }
}



module.exports = {
    upLoadSingleFile, upLoadMultipleFiles
}