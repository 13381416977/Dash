package dash.repository;


import dash.model.CarLoanIntention;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarLoanIntentionRepository extends JpaRepository<CarLoanIntention,String> {

  @Query(value = "select to_char(s.COF043_CREATE_S,'yyyy-mm') mouth,count(*) amount from VCOF043_CARLOAN_INTENTION s group by"
              + " to_char(s.COF043_CREATE_S,'yyyy-mm') order by to_char(s.COF043_CREATE_S,'yyyy-mm') desc", nativeQuery = true)
  List<Object[]> leads();
}
