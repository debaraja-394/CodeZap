const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { v4:uuid } = require("uuid");

exports.runCode = (req,res) => {
    const { code, language } = req.body;

    if(language !== "python"){
        return res.status(400).json({ output: "Only python supported for now!!"});
    }
    
    const jobId = uuid();
    const tempFile = path.join(__dirname,`../temp/${jobId}.py`);

    fs.writeFileSync( tempFile, code);

    exec(`python ${tempFile}`, (error,stdout,stderr) => {
        fs.unlinkSync(tempFile);

        if(error){
            return res.status(200).json({output : stderr || error.message});
        }

        res.json({ output: stdout});
    });
};