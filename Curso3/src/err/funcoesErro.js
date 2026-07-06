export default function trataErros(err){
    if(err.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado');
    }else{
        return 'Outro erro';
    }
}
