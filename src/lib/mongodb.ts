import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되어 있지 않습니다. .env.local을 확인해주세요.");
  }
  return new MongoClient(uri).connect();
}

// 실제로 DB에 접근하는 시점에만 연결하도록 지연 초기화합니다.
// (빌드 타임에 모듈이 평가되며 즉시 연결을 시도하는 것을 방지)
// 전역에 캐시해 개발 모드 HMR/서버리스 웜 인스턴스에서 커넥션이 중복 생성되지 않도록 합니다.
export default function getMongoClientPromise(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = createClientPromise();
  }
  return global._mongoClientPromise;
}
