<template>
    <div class="detail-handle" :class="{ 'detail-movement' : detailOpen}" @click="openCloseDetail">{{ detailOpen ? '아무데나 클릭하면 닫힙니다' : '더보기' }}</div>
    <div class="detail-main" :class="{ 'detail-movement' : detailOpen}" @click="openCloseDetail">
        <h1>{{ $route.query.job }}</h1>
        <div>주력 다수 공격기인 퍼실레이드의 원킬컷은 낮다. 하지만 그것만으로는 필드를 다 휘어잡을 수 없는 만큼, 소환수의 원킬컷을 맞춰 필드 점유율을 높이는 것이 가장 큰 과제다. 따라서 설치형 소환수인 시즈
            봄버와 배틀쉽 봄버의 운용이 중요하다. 또한 중간중간 전함 노틸러스와 스트레인지 붐, 5차 스킬인 불릿 파티나 데드아이 등으로 필드를 정리해야 하니 보스전만큼은 아니지만 손이 바쁜 직업이라고 할 수
            있다. 그래도 준 광역기 스킬들이 다수 포진되어 있어서 사냥 난이도는 그렇게 어렵지 않다.</div>
        <h2>평딜</h2>
        <div>캡틴 평딜의 주축은 래피드 파이어, 헤드 샷, 각종 소환수와 5차 스킬들이다. 그 중에서도 본체의 평딜은 컨티뉴얼 에이밍의 디버프가 적용된 보스를 대상으로 래피드 파이어+헤드 샷/스트레인지 봄/데스
            트리거/데드아이 정도로 압축된다. 평상시에는 헤드 샷을, 잡몹 처리에는 스트레인지 봄이나 데스 트리거를 쓴다. 데드아이는 무적 때문에 아껴 써야 하지만, 조건만 맞으면 단일 대상 누킹에 주로 쓰인다.
            소환수는 서먼 크루, 시즈 봄버, 배틀쉽 봄버 2기가 있다. 서먼 크루는 소환수 자체 화력보다는 상태 이상 방어나 소환되었을 때의 추가 능력치에 초점을 두고, 시즈 봄버와 배틀쉽 봄버는 각각 회전포대와
            고정포대로서 기능한다.</div>
        <h2>극딜</h2>
        <div>컨티뉴얼 에이밍 디버프가 적용된 적을 대상으로, 노틸러스 어썰트와 데스 트리거를 쏟아부으면 된다. 이에 추가적으로 헤드 샷의 대폭 상향으로 바인드 극딜의 시작과 끝에 헤드 샷을 우겨넣는것이
            중요해졌다. 물론 그 이전에 소환수나 퀵 드로우 여부는 물론이고, 에픽 어드벤처, 파이렛 플래그, 시드링, 메이플월드 여신의 축복, 소울 컨트랙트(엔버 링크), 오버 드라이브, 언위어링 넥타 등 각종
            버프 스킬이 다 걸려 있는지도 확인해야 한다. 소환수를 미리 준비해두기만 하였다면 적은 편인 극딜 버프수와 후딜레이, 노틸러스 어썰트의 무적기로 인해 극딜 안전성은 높은 편. 만약 파티 레이드라면
            대중적인 주기이자 비숍 스킬인 프레이에 맞춘 180 주기에 맞춰 사용하기 용이하다.</div>
        <h2>장점</h2>
        <div>높은 크리티컬 관련 능력치
            자체 크리티컬 확률만 75%로, 비숍과 패스파인더[15], 나이트로드, 하이퍼 찍은 다크나이트와 함께 공동 1위이다. 크리티컬 데미지도 기본 55%에 달하여 최대 125%인 카데나, 기본 60%인
            엔젤릭버스터 다음가는 높은 수치를 가진다. 덕분에 쓸만한 샤프 아이즈와 어빌리티 등의 약간의 추가 크확만 있다면 확정 크리티컬(100%)을 확보하기가 쉬운 편에 속한다. 또한 확정 크리티컬을 구비한
            이후에는 뛰어난 크리티컬 데미지로 화력 상승을 크게 체감할 수 있다.
            안정적인 극딜 성능
            극딜기 노틸러스 어썰트와 보조 극딜기인 데스 트리거의 압축이 잘 되어있는 편이고, 노틸러스 어썰트는 무적이 붙어 극딜 안정성도 뛰어나다. 주기도 각각 180초와 45초라서 프레이(180초)나 소울
            컨트랙트(엔버 링크, 90초), 대다수 직업의 극딜 주기와도 맞아떨어져 파티에서 보스 딜러로 채용될 때 극딜 주기로 인한 불이익도 없다. 모험가 리마스터 후 헤드샷이 상당한 상향을 받고 넥타가 소환수
            강화 버프기로 리뉴얼되는 등 상기한 두 스킬을 뺀 화력 역시 보완되었다.
            최상위권 화력의 평딜
            리마스터 이전에도 다양한 소환수와 헤드샷을 필두로 한 캡틴의 평딜은 준수한 편이었는데, 리마스터 패치로 소환수의 딜을 소폭 너프시키고 헤드샷을 대폭 상향시키면서 캡틴의 이론상 평딜은 최상위 수준까지
            상승하게 되었다. 특유의 난잡한 딜 사이클도 상당 부분 해결된 지금은 비슷한 화력 수준의 평딜 직업들이 쉼없는 캔슬, 강제 이동, 긴 후딜레이 등과 같은 제약에 고통받는 데 비해 캡틴은 컨트롤 난이도도
            높지 않은 편.
            높은 데미지 및 보공 효율
            크리티컬 데미지 %가 높고, 최종 데미지도 컨티뉴얼 에이밍 + 퀵 드로우의 효과로 높게 뽑을 수있다. 데미지 %가 매우 낮은 대신 크뎀, 최종뎀으로 딜을 하는 캡틴의 특성상 확보하기 매우 어려운
            크리티컬 데미지%의 효율이 낮은 대신, 아이템이나 어빌리티, 하이퍼 스탯 등으로 쉽게 확보할 수 있는 데미지%와 보스 데미지%의 효율이 굉장히 높다.
            우수한 생존 유틸리티
            캡틴은 윙즈의 독보적인 윗점 성능과 활공기능, 백스탭샷의 미세한 기동능력, 파이렛 리프의 긴 점프거리를 가지고 있어 기동성이 우수하고 이를 바탕으로 수월한 패턴 대응이 가능하다. 여기에 퍼실레이드의
            슈퍼 스탠스와 30초쿨의 무적기 데드아이, 급속회복 언위어링 넥타에 극딜기 노틸러스 어썰트에도 무적이 있어 생존 유틸리티도 상당히 우수하다. 심지어 상태이상을 최대 두 번까지 방어할 수 있는 스킬 서먼
            크루도 있는데, 일반적인 상태 이상 방어기보다 막을 수 있는 패턴이 더 많고[16] 가동률 측면에서도 독자적인 장점을 갖추고 있는 등[17] 굉장히 우수한 성능을 자랑한다. 덕분에 캡틴의 생존력은 매우
            뛰어난 편에 속한다.
            주력기의 낮은 원킬컷
            캡틴의 주력 사냥기인 퍼실레이드는 퍼뎀이 2596%로, 모든 모험가 직업군의 주력 사냥기 중 원킬컷이 제일 낮다. 모든 직업군들과 비교해봐도 웬만한 스킬들은 명함도 내밀지 못하는 수준의 높은 데미지
            기대값을 가진다. 캡틴의 퍼실레이드와 비교할만한 원킬컷을 가진 스킬은 키네시스의 얼티메이트 - 싸이킥 불릿, 스트라이커의 벽력, 엔젤릭버스터의 프라이멀 로어 정도이다. 팬텀이 훔쳐갈 경우 원킬컷이 매우
            낮아지고, 템셋팅에 대한 부담이 덜해져 종종 훔쳐갈 정도로 딜량 기대값 하나만큼은 정말 높은 주력기이다.</div>
    </div>
</template>

<style scoped>
.detail-handle {
    position: fixed;
    top: 95vh;
    left: 0;
    width: 100vw;
    height: 5vh;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    box-shadow: 0 -2px 2px #000;
    color: var(--primary-blue);
}

.detail-main {
    position: fixed;
    top: 95vh;
    margin-top: 5vh;
    width: 100vw;
    height: 95vh;
    background-color: #ddd;
    border: #fff solid 20px;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 99;
    transition: 0.3s ease-in-out;
}

.detail-movement {
    top: 0;
}
</style>

<script>
export default {
    props: {

    },
    data() {
        return {
            detailOpen: false,
        }
    },
    methods: {
        openCloseDetail() {
            this.detailOpen = !this.detailOpen;
        },
    }
}
</script>