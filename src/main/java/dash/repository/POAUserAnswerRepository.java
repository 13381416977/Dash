package dash.repository;


import dash.model.POAUserAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface POAUserAnswerRepository extends JpaRepository<POAUserAnswer,String> {

  @Query(value = "select to_char(s.COF044_CREATE_S,'yyyy-mm') mouth,count(*) amount,round(avg(s.COF044_AMOUNT_SUGGESTED),0) \"average suggested allowance\" from VCOF044_POA_USERANSWER s "
              + "group by to_char(s.COF044_CREATE_S,'yyyy-mm') order by to_char(s.COF044_CREATE_S,'yyyy-mm') desc", nativeQuery = true)
  List<Object[]> test();
}
