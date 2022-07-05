export default function (err: Error, req: any, res: any, next: any) {
    res
        .status(500)
        .json({
            message: err.message,
        })
}

