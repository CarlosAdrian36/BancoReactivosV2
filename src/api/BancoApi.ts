import type { BancoReactivo } from '@/modules/Bancos/interfaces/bancoInterface';

// Simulación de respuesta de API
const bancosMock: BancoReactivo[] = [
  {
    bancoId: 1,
    titulo: 'Matemáticas I',
    descripcion: 'Banco de reactivos para examen de Matemáticas I',
    esCompartido: true,
  },
  {
    bancoId: 2,
    titulo: 'Física Básica',
    descripcion: 'Preguntas de física nivel básico',
    esCompartido: false,
  },
  {
    bancoId: 3,
    titulo: 'Historia Universal',
    descripcion: 'Banco de reactivos sobre historia mundial',
    esCompartido: true,
  },
  {
    bancoId: 4,
    titulo: 'Química Avanzada',
    descripcion: 'Reactivos de química para nivel avanzado',
    esCompartido: false,
  },
  {
    bancoId: 5,
    titulo: 'jsdfljdhglkjhfglkjsdhfglkjhdf Avanzada',
    descripcion:
      'Reactivos de química para nivel avanzadosadfasdfasjklhdflkajshdflk asdlkjfbal asidujfg asfiu a viaur vaiurv aerv s dvauye vae a welv aerlj vljan vjas vjae jfv aeljhrljherf WF lewjhf a,mnd fcuaewf ',
    esCompartido: false,
  },
  {
    bancoId: 6,
    titulo: 'sd,mfhsd flkjwfl sdjgne kj453453 34lk5 3k234',
    descripcion:
      '1 2 3 4 5 6 7 8 9 1 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 ',
    esCompartido: false,
  },
  {
    bancoId: 7,
    titulo: 'es e r r  s smsadjkav arevjaer voet trore tyur suifwe eufw fejvkje veiv egbvnejgv e ',
    descripcion:
      'skledhfs fsje fujser fko45fw;tm tyl;ytkbm iompo owdwxwq xwxr3gv tyb yujm ui mio , 9pio, iu my br f ',
    esCompartido: false,
  },
  {
    bancoId: 8,
    titulo:
      '  111 11 2 2 2 2 34 3 3  4 4 45 5 6 7 8 9 09 ngh nh gbb hg bt bte be tb et btry brt ce qaz wsqx wcxerc rtbv y6u noi ,',
    descripcion: 'Reactivwerfweros de rwerwerwer para cdscsceg fsvrgvtb',
    esCompartido: false,
  },
  {
    bancoId: 9,
    titulo:
      'asdkjhlkjahglkjdshfglkjnlkdfsbj ljk vljkfgelrhkglkajehrgiuoahg;kljahldkjg asljgfhhalkj iuae vlak;j valkeuj vljka vljkahke rvlujhhu vbl ',
    descripcion:
      ' dv ae var v ytg h  fd awegv etv e vawe fa erwft aw44 rc a vytr hgyu j ik yb v w zqz q ze xe c rtgb uy nijfsjdhbfhjksdfjksdbfkjsdhfkjhsdkjfhskjfn 3f vet vrt v av af  gv tfvrev ear v aef a4 faw fa 4rgae hae fa fwi efiawe fiaw dkaw cierkfvaeijckawtkias,mcsiwrisfw fweif er ferf eikrv ikj  ',
    esCompartido: false,
  },
];

// Simula un `fetch` a la API con delay
export const fetchBancos = (): Promise<BancoReactivo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bancosMock);
    }, 1000); // 500ms de retraso para simular red
  });
};
